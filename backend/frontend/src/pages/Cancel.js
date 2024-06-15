import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
const Cancel = () => {
  return (
    <div className='bg-red-200 w-full max-w-md m-auto h-48 text-center flex-col justify-center items-center gap-4 font-semibold text-lg'>
        <p className='text-blue  font-ballubhai font- text-2xl sm:text-4xl py-8'>Payment Failed<span className='inline px-2'>< MdErrorOutline className='inline text-2xl text-red-600 sm:text-4xl' /></span></p>
        <Link to={"/"} className='max-w-[192px] m-auto py-4 px-2 rounded overflow-hidden bg-blue-900 hover:bg-blue-950 text-base text-white sm:text-lg'>Return to Home Page</Link>
    </div>
  )
}

export default Cancel