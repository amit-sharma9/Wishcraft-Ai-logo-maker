"use client";

import React, { useState } from "react";
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
  console.log(formdata);
  
  };

  return (
    <div className="mt-28 p-10 border rounded-xl ">
      {step == 1 ? 
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
        /> :
        step == 2 ? 
        <LogoDesc
          onHandleInputChange={(v) => onHandleInputChange("desc", v)}
        /> :
        step == 3 ? 
        <LogoPalette
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
        /> :
        step == 4 ? 
        <LogoDesign
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
        /> :
        step == 5 ? 
        <LogoIdea
          onHandleInputChange={(v) => onHandleInputChange("idea", v)}
        /> :
        <h2>This is the end Rukja bhai</h2>}

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
