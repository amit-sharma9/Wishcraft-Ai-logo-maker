import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
export default function Header() {
  return (
   <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm">
      
      {/* Logo + Title ek group me */}
      <div className="flex items-center space-x-2">
        <Image 
          src={'/reshot-icon-pencil-U3A6CNXBDH.svg'} 
          alt="logo" 
          width={50} 
          height={90} 
        />
        <span className="text-xl font-bold">Wishcraft</span>
      </div>

      <Button>Get started</Button>
    </div>
  )
}
