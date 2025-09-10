"use client"

import React, { useState } from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

export default function LogoTitle({onHandleInputChange}) {
  const searchparam = useSearchParams();
  const [title,setTitle] = useState(searchparam?.get('title')??'');
  return (
    <div className="my-10">
      <HeadingDesc title={Lookup?.LogoTitle} desc = {Lookup.LogoTitleDesc}/>

      <input type="text" placeholder={Lookup.InputTitlePlaceholder} className='mt-5 p-4 w-full border rounded-lg'
      defaultValue={title}
      onChange={(e)=>{
        onHandleInputChange(e.target.value);}}
      />
    </div>
  )
}
