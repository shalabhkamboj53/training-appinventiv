import React from 'react'

const HeroMain = () => {
  return (
        <div className='relative lg:min-h-[90vh] min-h-[50vh] w-full flex justify-center items-center'>
            <div className='absolute -top-32 bottom-0 left-0 right-0 -z-10 w-[100%]' style={{backgroundImage:"url('/hero-01.jpg')", backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
            <div className='grid-cols-2 grid lg:w-[70%] w-[90%] py-20'>
                <div className=''>
                    <span className='text-xs font-medium'>
                        Black Friday in july
                    </span>
                    <h2 className='text-7xl font-extrabold mt-8'>
                        Up to 50% off
                    </h2>
                    <p className='text-xl font-semibold mt-8'>
                        Hundreds of styles available
                    </p>

                    <button className='btn btn-neutral bg-black border-r-0 mt-8 text-white'>SHOP NOW</button>
                </div>
                <div className=''>

                </div>
            </div>
        </div>
  )
}

export default HeroMain