import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-violet-900 px-8 py-3'>
        <Link className='text-white font-bold' href={'/'}>To Do App</Link>
        <Link className='bg-white rounded-3xl p-2 px-4' href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar