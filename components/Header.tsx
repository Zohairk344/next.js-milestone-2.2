import Link from 'next/link'
import React from 'react'

const Header = () => { 
  return (
    <div className='container mx-auto items-center flex py-2'>
    <h1 className='text-[30px] font-bold '><Link href="/">NexMind</Link></h1>
    <div className='grow'>
      <div className='flex justify-end gap-6 font-semibold '>
      <Link href="/" className='hover:underline hover:text-blue-400 hover:font-extrabold'>Home</Link>
      <Link href="/about" className='hover:underline hover:text-blue-400 hover:font-extrabold'>About-Us</Link>
      <Link href="/contact" className='hover:underline hover:text-blue-400 hover:font-extrabold'>Contact-Us</Link>
      </div>
    </div>
  </div>
  )
}

export default Header