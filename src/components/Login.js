import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isLoginIn, setIsLoginIn] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function toggleForm() {
        setIsLoginIn(!isLoginIn);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt='logo'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
            </div>
            <form className='text-white absolute m-auto my-36 right-0 left-0 w-3/12 p-12 bg-black rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold py-4'>Sign {isLoginIn ? "In" : "Up"}</h1>
                {!isLoginIn && <input type='text' value={name} placeholder='Enter name' className='p-4 my-4 w-full bg-slate-700 bg-opacity-50' />}
                <input type='text' value={email} placeholder='Email Address' className='p-4 my-4 w-full bg-slate-700 bg-opacity-50' />
                <input type='password' value={password} placeholder='Password' className='p-4 my-4 w-full bg-slate-700 bg-opacity-50' />
                <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign {isLoginIn ? "In" : "Up"}</button>
                <p className='py-4 cursor-pointer' onClick={() => { toggleForm(); }}> {isLoginIn ? "new to Netflix? Sign Up now" : "Already registered? Sign In now"}</p>
            </form>
        </div>
    );
};

export default Login;