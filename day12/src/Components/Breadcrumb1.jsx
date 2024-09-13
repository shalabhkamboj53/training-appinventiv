import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb1 = ({linksMap, category}) => {
  return (
    <div className=''>
        <ul className='flex separator text-slate-600 font-semibold'>
            <li className=''>
                <Link to='/'>Home</Link>
            </li>
            {
                linksMap.map((link, index) => (
                    <li key={index} className=''>
                        <Link to={link.url}>{link.title}</Link>
                    </li>
                ))
            }
        </ul>
        {
            category?(
                <>
                    <h2 className='mt-5 text-6xl font-extrabold'>{category.title}</h2>
                    <p className='text-sm font-bold text-slate-600 mt-20'>Showing all {category.count} results</p>
                </>
            ) : ''
        }
    </div>
  )
}

export default Breadcrumb1