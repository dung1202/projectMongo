import React, { useState } from 'react'

import { login } from './axios'
export default function LoginScreen({ setToken }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginBtn = async () => {
        try {
            let body = {
                email,
                password
            }
            const result = await login(body)
            setToken(result.data.accessToken)
        } catch (error) {
            alert(error.response.data.err)
        }
    }
    const handleChangePass = (event) => {
        setPassword(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    return (
        <div>
            <input placeholder={'Email'} value={email} onChange={handleChangeEmail} />
            <input placeholder={'Password'} type='password' onChange={handleChangePass} />
            <button onClick={loginBtn} >Login</button>
        </div>
    )
}
