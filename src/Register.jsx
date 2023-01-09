import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <div className="auth-form-container">
            {/* <h2>WELCOME TO BOOK MY SHOW</h2> */}
            <h2>Registration</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                {/* Username */}
                <label htmlFor="name">Full Name</label>
                <input  value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder="Enter Your Full Name" id="name" name="name" />
                {/* email */}
                <label htmlFor="email">EMAIL</label>
                <input  value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your Email Id" id="email" name="email" />
                {/* password */}
                <label htmlFor="password">PASSWORD</label>
                <input  value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="*********" id="password" name="=password" />
                <button>Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already Have An Button? Login Here</button>
        </div>
    )
}