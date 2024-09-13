import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center px-6 py-5 border-b-2 border-opacity-10 border-gray-400">
            <div>
                <Link to={'/'}>
                    <h1 className='text-2xl font-bold'>FURNITURE</h1>  
                    <span className='font-thin text-sm'>SHOP</span>
                </Link>
            </div>
            <div className='hidden lg:block text-[12px]'>
                <ul className='flex gap-5'>
                    <Link to={'/shop/all'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'>SHOP ALL</li>
                    </Link>
                    <Link to={'/category/Decor'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'>DECOR</li>
                    </Link>
                    <Link to={'/category/Office'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'>OFFICE</li>
                    </Link>
                    <Link to={'/category/Living Room'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'>LIVING ROOM</li>
                    </Link>
                    <Link to={'/category/Bedroom'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'>BEDROOM</li>
                    </Link>
                    <Link to={'/'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'><i className="bi bi-search"></i></li>
                    </Link>
                </ul>
            </div>
            <div className='hidden lg:block text-[12px]'>
                <ul className='flex gap-5 items-center'>
                    <li className='hover:text-yellow-700 hover:cursor-pointer'>STORY</li>
                    <li className='hover:text-yellow-700 hover:cursor-pointer'>CONTACT</li>
                    <li className='hover:text-yellow-700 hover:cursor-pointer'>TRACK ORDER</li>
                    <li className='hover:text-yellow-700 hover:cursor-pointer'>HELP</li>
                    <Link to={'/login'}>
                        <li className='hover:text-yellow-700 hover:cursor-pointer'>Log In</li>
                    </Link>
                    <li className='hover:cursor-pointer'><i className="bi bi-basket3 text-[20px] my-auto"></i></li>
                </ul>
            </div>
            <div className='block lg:hidden'>
            <i className="bi bi-list text-4xl"></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
