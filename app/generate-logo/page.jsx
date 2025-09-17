"use client"
import React, { Suspense, useContext, useEffect, useState } from "react";
import LookUp from "../_data/Lookup";
import Prompt from "../_data/Prompt";
import axios from "axios";
import Image from "next/image";
import { DownloadIcon, LayoutDashboard, LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserDetailContext } from "../_context/UserDetailContext";

export default function page() {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [logoImage, setLogoImage] = useState();
  const {userDetail,setUserDetail} = useContext(UserDetailContext);

    useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storage = localStorage.getItem("formData");

      if (storage) {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo();
    }
  }, [formData]);

     const GenerateAILogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoIdea}", formData?.idea)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoPrompt}", formData?.design?.prompt);
    console.log(PROMPT);
      
    //Generate Logo prompt from AI
    //Generate Logo Image
    const result = await axios.post('/api/ai-logo-model',{
      prompt:PROMPT
    })
  console.log(result?.data);
 }
  

  return (
    <div>{userDetail?.name}</div> 
  )
}
