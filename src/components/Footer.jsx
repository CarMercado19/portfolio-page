import React from 'react'
import { VscTerminalCmd } from "react-icons/vsc";

export default function Footer() {
  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
        <VscTerminalCmd className="invert h-5 lg:h-9 w-5 lg:w-9" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>@ 2025 Carlos Roberto Portfolio</p>
      </div>
    </div>
  )
}
