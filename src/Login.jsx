import React, { useState } from "react"
export const Login = (props) => {
    const [emailid, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailid)
    }
    return (
       <div>
        {/* <div>
            <img 
            src="https://w1.pngwing.com/pngs/913/269/png-transparent-movie-logo-graphic-film-cinema-movie-projector-outdoor-cinema-movie-camera-projection-screens-home-movies-thumbnail.png"
            />
        </div> */}
         <div className="auth-form-container">
            {/* <h2>WELCOME TO BOOK MY SHOW</h2> */}
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input value={emailid} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email Id" id="email" name="email" />
                <label htmlFor="password">PASSWORD</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*********" id="password" name="=password" />
                <button>Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't Have An Button? Register Here</button>
        </div>
       </div>
    )
}