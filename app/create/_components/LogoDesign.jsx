"use client";
import React, { useState } from "react";
import HeadingDesc from './HeadingDesc'
import Lookup from "@/app/_data/Lookup";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";

function LogoDesigns({ onHandleInputChange, formdata }) {
  const [selectedOption, setSelectedOption] = useState(formdata?.design?.title);

  return (
    <div className="my-10">
      <HeadingDesc
        title={Lookup.LogoDesignTitle}
        desc={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            className={`cursor-pointer p-1 border-primary hover:border-2 rounded-lg ${selectedOption == design.title && 'border-primary border-2'}`}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="cursor-pointer w-full rounded-xl h-[90px] object-cover"
            />
            <h2 className='text-center mt-3 font-medium text-lg'>{design.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesigns;