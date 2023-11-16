'use client';
import Image from 'next/image'
import { useState } from "react";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className=" flex flex-row h-screen w-screen bg-black">
      <div className="relative ">
        <button className='bg-blue-400  px-3 py-2 rounded' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Filter</button>
        {isDropdownOpen && (
          <div className="absolute top-01 right-0 bg-gray-500   z-10">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
        {isDropdownOpen && (
          <div className="absolute top-1 left-16 bg-gray-500   z-10">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
        {isDropdownOpen && (
          <div className="absolute top-10 left-32 bg-gray-500   z-10">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
