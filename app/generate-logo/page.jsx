"use client"
import React, { useContext } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'

export default function page() {

  const {userDetail,setUserDetail} = useContext(UserDetailContext);
  console.log(userDetail);

  return (
    <div>{userDetail?.name}</div>
  )
}
