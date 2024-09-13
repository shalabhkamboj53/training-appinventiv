import React from 'react'

const Login = () => {
  return (
    <div className='my-20 min-h-[60vh] flex justify-center items-center'>
        <div className='border-2 py-5 px-8'>
            <h2 className='text-5xl text-center font-extrabold mt-5 mb-10'>Login</h2>
            <input type="text" placeholder="Username or Email Address *" className="input input-bordered w-full bg-white text-black rounded-none mb-5" />
            <input type="password" placeholder="Password *" className="input input-bordered w-full bg-white text-black rounded-none mb-5" />
            <div className='flex items-center text-sm mb-5'>
                <input type="checkbox" defaultValue={false} className="checkbox border-2 border-gray-300 me-2" />
                Remember me
            </div>
            <button className='btn bg-black rounded-none w-full text-white mb-3'>LOG IN</button>
            <button className='btn btn-ghost rounded-none w-full text-yellow-700 opacity-50 mb-5'>Lost your password?</button>
        </div>  
    </div>
  )
}

export default Login