import React, { useRef, useState } from 'react'
import OtpInput from 'react-otp-input';

const Home = () => {
    const OtpModal = useRef('')
    const [verifiedOtp, setVerifiedOtp] = useState(false)
    const [otp, setOtp] = useState('')
    const [otpTimer, setOtpTimer] = useState('01:00')
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contact: '',
        pid: '',
        gender: '',
        anything: '',
        option: '',
        date: '',
        checkbox: false,
        toggle: false
    })
    
    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    
    const otpTimerHandler = () => {
        if(formData.contact.length!=10 || formData.contact.match(/[a-z]/i)){
            alert('Invalid Contact')
            return
        }

        OtpModal.current.showModal()
        setOtpTimer('01:00')

        var OtpInterval = setInterval(() => {
            setOtpTimer((prev)=>{
                let time = prev.split(':')
                let minutes = parseInt(time[0])
                let seconds = parseInt(time[1])
                if(seconds === 0) {
                    if(minutes === 0) {
                        clearInterval(OtpInterval)
                        return '00:00'
                    } else {
                        minutes = minutes - 1
                        seconds = 59
                    }
                } else {
                    seconds = seconds - 1
                }
                return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            })
        }, 1000);

    }

    const otpSubmitHandler = () => {
        if(otp.length!=6 || otp.match(/[a-z]/i)){
            alert('Invalid OTP')
            return
        }
        if(otp === '123456') {
            alert('OTP Verified')
            setVerifiedOtp(true)
            OtpModal.current.close()
        }
    }
    
    return (
        <>
        <div className='fixed top-0 left-0 right-0 bottom-0 -z-10' style={{background:'linear-gradient(90deg, #7c9efe 0%, #8360f0 100%)'}}></div>

        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white rounded-xl px-10 py-8 lg:w-[60%] sm:w-[70%] w-[90%] my-32'>
                <form onSubmit={formSubmitHandler}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-black">Username</span>
                        </div>
                        <input type="text" placeholder="Enter Username" onChange={(e)=>{setFormData((prev)=>{return{...prev, username:e.target.value}})}} value={formData.username} name='username' className="input input-bordered border-2 border-black rounded-md w-full bg-white" />
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-black">Email</span>
                        </div>
                            <input type="text" placeholder="Enter Email" onChange={(e)=>{setFormData((prev)=>{return{...prev, email:e.target.value}})}}  value={formData.email} name='email' className="input input-bordered border-2 border-black rounded-md w-full bg-white" />
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-black">Contact</span>
                        </div>
                        <div className='flex gap-2 relative items-center'>
                            <input type="tel" required max={9999999999} maxLength={10} placeholder="Enter Contact Number" onChange={(e)=>{setFormData((prev)=>{return{...prev, contact:e.target.value}})}} value={formData.contact} name='contact' className="input input-bordered border-2 border-black rounded-md w-full bg-white" />
                            {
                                verifiedOtp && (
                                    <i className="bi bi-patch-check-fill text-3xl text-green-500 "></i>
                                )
                            }
                            {
                                !verifiedOtp && (
                                    <button className='btn btn-outline btn-primary' onClick={()=>{otpTimerHandler()}}>Verify</button>
                                )
                            }
                        </div>
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-black">Personal ID Number</span>
                        </div>
                        <input type="text" placeholder="Value" name='pid' onChange={(e)=>{setFormData((prev)=>{return{...prev, pid:e.target.value}})}} value={formData.pid} className="input input-bordered border-2 border-black rounded-md w-full bg-white" />
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <input type="radio" id='maleGender' name="gender" value={'male'}  onChange={(e)=>{setFormData((prev)=>{return{...prev, gender:e.target.value}})}}  className="radio border-black me-4" />
                                <label htmlFor="maleGender">Male</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" id='femaleGender' name="gender" value={'female'} onChange={(e)=>{setFormData((prev)=>{return{...prev, gender:e.target.value}})}}  className="radio border-black me-4" />
                                <label htmlFor="femaleGender">Female</label>
                            </div>
                            <div>
                                <input type="checkbox" name='toggle' checked={formData.toggle} onChange={(e)=>{setFormData((prev)=>{return{...prev, toggle:e.target.checked}})}} className="toggle" defaultValue={false} />
                            </div>
                        </div>
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-black">Write Anything</span>
                        </div>
                        <input type="text" placeholder="Enter your text here" onChange={(e)=>{setFormData((prev)=>{return{...prev, anything:e.target.value}})}}  value={formData.anything} name='anything' className="input input-bordered border-2 border-black rounded-md w-full bg-white" />
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-black">Select an option below</span>
                        </div>
                        <select value={formData.option} onChange={(e)=>{setFormData((prev)=>{return{...prev, option:e.target.value}})}}  name='option' className="select select-bordered border-2 border-black rounded-md w-full bg-white">
                            <option defaultValue="">Select Option</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </label>

                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text text-black">Choose a Date</span>
                        </div>
                        <input type="date" value={formData.date} name='date' onChange={(e)=>{setFormData((prev)=>{return{...prev, date:e.target.value}})}}  placeholder="Select Date" className="input input-bordered border-2 border-black rounded-md w-full bg-white" />
                    </label>

                    <label className="w-full flex mt-5">
                        <div>
                            <input type="checkbox" checked={formData.checkbox} onChange={(e)=>{setFormData((prev)=>{return{...prev, checkbox:e.target.checked}})}}  name='checkbox' className="checkbox border-black" />
                        </div>
                        <p className='ms-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi vitae iusto consequuntur alias quaerat quia deserunt? Placeat doloremque eveniet corrupti natus tempore in nesciunt cumque quas, consequatur fugit vel.
                        </p>
                    </label>

                    <button className='btn bg-[#4a3ee6] text-white w-full mt-10'>Submit</button>


                </form>
            </div>
        </div>
        <dialog ref={OtpModal} className="modal modal-bottom sm:modal-middle">
            <div className="bg-white py-14 px-20 rounded-xl relative mx-10">
                <h3 className="font-bold text-2xl text-center">Verify OPT</h3>
                <p className="py-4 text-center text-[#9748ff] font-medium">
                    Time left <span className='text-white bg-[#9748ff] px-3 py-2 rounded-md ms-3'>{otpTimer}</span>
                </p>
                <div className="my-10">
                    <p className='text-center mb-5'>Enter the 6 digit OTP sent to your mobile xxxxxx{formData.contact.substring(6,10)}</p>
                    <div>
                        <div className='mx-auto'>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => { return (
                                    <div className='mx-auto border-2 border-black rounded-md'>
                                        <input {...props} type='number' className='border-none outline-none mx-2 my-3 sm:mx-3 bg-white text-black text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
                                    </div>
                                )}}
                            />
                            <button className='btn btn-primary bg-[#4a3ee6] w-full mt-8 text-white' onClick={otpSubmitHandler}>Verify OTP</button>
                            <button className='btn btn-ghost text-[#4a3ee6] w-full mt-2'>Resend OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </>
  )
}

export default Home