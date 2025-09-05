import React from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
export default function Hero() {
  return (
    <div className='flex items-center mt-24 flex-col gap-5'>
      <h2 className='text-primary text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h2 className=' text-5xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
      <p className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</p>

      <div className='flex gap-6 w-full max-w-2x1 mt-10'>
        <input type="text" placeholder={Lookup.InputTitlePlaceholder} className='p-3 border rounded-md w-full shadow-md'/>
      <Button className='w-full p-6'>Get started</Button>
      </div>
    </div>
  )
}
