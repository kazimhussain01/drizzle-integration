"use client"
import React, { useEffect, useState } from 'react'


const Input = ({ update }: any) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    // console.log(username, email)

    const handlePost = async () => {
        await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email
            })
        })
        setUsername("")
        setEmail("")
    }

    return (
        <div>
            <input
                type="text"
                value={username}
                placeholder='UserName'
                className='border border-blue-600 p-2 mb-3'
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={email}
                placeholder='Email'
                className='border border-yellow-600 p-2 mb-3'
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* Submit Button */}
            <button
                onClick={handlePost}
                className='bg-yellow-300 px-4 py-2 text-2xl font-bold rounded-md'
                type='submit'>Submit</button>
        </div>
    )
}

export default Input