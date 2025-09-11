import React, { useEffect, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import Prompt from '@/app/_data/Prompt'
import axios from 'axios'

export default function LogoIdea({formdata , onHandleInputChange}) {
  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
const [selectedOption, setSelectedOption] = useState(formdata?.idea);
  useEffect(()=>{
    generateLogoDesignIdea();
  },[]); 

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace(
      "{logoType}",
      formdata?.design?.title
    )
      .replace("{logoTitle}", formdata.title)
      .replace("{logoDesc}", formdata.desc)
      .replace("{logoPrompt}", formdata.design.prompt);

      // console.log(PROMPT);
      const result = await axios.post('/api/ai-design-ideas' , {
        prompt :PROMPT
      })
      console.log(result.data);
      setIdeas(result.data.ideas);
    setLoading(false);

  }


  return (
    <div className="my-10">
      <HeadingDesc
        title={Lookup.LogoIdeaTitle}
        description={Lookup.LogoIdeaDesc}
      />
      <div className="flex items-center justify-center">
        {loading && <Loader2Icon className="animate-spin my-10" />}
      </div>
      <div className="flex flex-wrap gap-3 mt-6">
        {ideas &&
          ideas.map((item, index) => (
            <h2
              key={index}
              onClick={() => {
                setSelectedOption(item);
                onHandleInputChange(item);
              }}
              className={`p-2 rounded-full border px-3 cursor-pointer
          hover:border-primary ${selectedOption == item && "border-primary"}`}
            >
              {item}
            </h2>
          ))}
        <h2
          onClick={() => {
            setSelectedOption("Let AI Select the best idea");
            onHandleInputChange("Let AI Select the best idea");
          }}
          className={`p-2 rounded-full border px-3 cursor-pointer
          hover:border-primary ${
            selectedOption == "Let AI Select the best idea" && "border-primary"
          }`}
        >
          Let AI Select the best idea
        </h2>
      </div>
    </div>
  );
}
