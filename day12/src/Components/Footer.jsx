import React from 'react'

const Footer = ({categories}) => {
  return (
    <div className='border-t-2 border-gray-600 border-opacity-10 bg-slate-200 pt-16'>
        <div className=''>
            <div className='lg:w-[80%] lg:mx-auto mx-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pb-28'>
                <div className=''>
                    <h3 className='text-2xl font-bold'>FURNITURE</h3>
                    <p className='text-base text-gray-500'>SHOP</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-5'>Links</h3>
                    <ul>
                        <li className='text-yellow-700'>Story</li>
                        <li className='text-yellow-700'>Contact</li>
                        <li className='text-yellow-700'>Track Orders</li>
                        <li className='text-yellow-700'>Help</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-5'>Categories</h3>
                    <ul>
                        {
                            categories.map((items, id)=>{
                                return(
                                    <li key={id}>
                                        <span className='text-yellow-700'>{items.title} </span>
                                        ({items.count})
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-5'>Subscribe</h3>
                    <ul>
                        <input type="text" className='bg-white px-2 py-4 w-full' placeholder='Your email address...' />
                    </ul>
                </div>
            </div>
            <div className='border-t-2 border-gray-600 border-opacity-10'>
                <div className='lg:w-[80%] lg:mx-auto mx-5 flex justify-between items-center py-8'>
                    <p className='text-gray-500'>© 2021 Furniture. All rights reserved.</p>
                    <div className='flex'>
                        <i className='bi bi-facebook-square text-2xl text-gray-500 mr-5'></i>
                        <i className='bi bi-twitter text-2xl text-gray-500 mr-5'></i>
                        <i className='bi bi-instagram text-2xl text-gray-500'></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer