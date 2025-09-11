"use client";

import React, { useEffect,useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import LogoDesc from "./_components/LogoDesc";
import LogoIdea from "./_components/LogoIdea";
import LogoDesign from "./_components/LogoDesign";
import LogoPalette from "./_components/LogoPalette";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heading2 } from "lucide-react";

export default function Create() {
  const [step, setStep] = useState(1);
  const [formdata, setformdata] = useState();
  const onHandleInputChange = (field, value) => {
    setformdata((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
useEffect(() => {
  console.log("Updated formdata:", formdata);
}, [formdata]);

  return (
    <div className="mt-12 p-10 pt-2 border rounded-xl ">
      {step == 1 ? 
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
       formdata={formdata} /> :
        step == 2 ? 
        <LogoDesc
          onHandleInputChange={(v) => onHandleInputChange("desc", v)}
        formdata={formdata}/> :
        step == 3 ? 
        <LogoPalette
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
        formdata={formdata}/> :
        step == 4 ? 
        <LogoDesign
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
       formdata={formdata} /> :
        step == 5 ? 
        <LogoIdea
          onHandleInputChange={(v) => onHandleInputChange("idea", v)}
       formdata={formdata} /> :
        <h2>This is the end </h2>}

      <div className="flex items-center justify-between mt-10">
        {step != 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            {" "}
            <ArrowLeft />
            Previous
          </Button>
        )}
        <Button onClick={() => setStep((step + 1))}>
          Continue <ArrowRight></ArrowRight>
        </Button>
      </div>
    </div>
  );
}
