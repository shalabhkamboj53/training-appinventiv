import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate()
    const [IsMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('isLogin')!)?.status) {
            navigate('/')
        }
        setIsMounted(true)
    }, [])

    const LoginHandler = () => {
        let temp = {
            "username": usernameRef.current?.value,
            "password": passwordRef.current?.value
        }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(temp)
        })
            .then(res => res.json())
            .then((res) => {
                if(res?.username === temp.username && res?.token) {
                    localStorage.setItem('isLogin', JSON.stringify({...res, status: true}))
                    navigate('/dashboard')
                } else {
                    alert('invalid cred.')
                }
            })
            .catch((error)=>{
                alert(error)
            })


    }

    return (
        IsMounted &&
        <div className="min-h-[80vh] w-full flex justify-center items-center">
            <div>
                <h2 className="mb-5 text-center text-3xl font-bold">Login</h2>
                <div className="border-[1px] border-white border-opacity-20 p-10 rounded-md text-center">
                    <input type="text" defaultValue={'emilys'} className="input input-bordered w-full mb-5" placeholder="Username" ref={usernameRef} />
                    <input type="password" defaultValue={'emilyspass'} className="input input-bordered w-full mb-5" placeholder="Password" ref={passwordRef} />
                    <button className="btn btn-ghost w-full" onClick={LoginHandler}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login