import React from 'react'
import HeadingDesc from './HeadingDesc'
import Lookup from '@/app/_data/Lookup'
export default function LogoDesc({onHandleInputChange}) {
  return (
   <div className="my-10">
         <HeadingDesc title={Lookup.LogoDescTitle} desc = {Lookup.LogoDescDesc}/>
   
         <input type="text" placeholder={Lookup.InputTitlePlaceholder} className='mt-5 p-4 w-full border rounded-lg'
         onChange={(e)=>{
           onHandleInputChange(e.target.value);}}
         />
       </div>
  )
}
