"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from "@clerk/nextjs";
export default function Header() {
    const { user } = useUser();
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



      <div className="gap-3 flex items-center">
        {user ? (
          <Button variant="outline">Dashboard</Button>
        ) : (
          <Button>Login</Button>
        )}
        <UserButton />
      </div>
    </div>
  )
}
