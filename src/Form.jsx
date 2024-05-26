import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        
        const userData = {
            name: name,
            email: email,
            password: password,
        };
        
        // Save user data to localStorage
        localStorage.setItem("userData", JSON.stringify(userData));
        
        console.log(userData);
        navigate("/Login");
    };

    return (
        <form className='form max-w-lg mx-auto p-6 br-white rounded-lg shadow-md space-y-4' onSubmit={handleSubmit}>
            <h1 className='font-bold text-xl'>Sign Up</h1>
            <label className='block text-left'>Name</label>
            <input type="text" placeholder='username' value={name}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
            <label className='block text-left'>Email</label>
            <input type="email" placeholder='abc@gmail.com' value={email}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
            />
            <label className='block text-left'>Password</label>
            <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder='password' value={password}
                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <div className="absolute right-2 top-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
            </div>
            <label className='block text-left'>Confirm Password</label>
            <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} placeholder='confirm password' value={confirmPassword}
                    className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                />
                <div className="absolute right-2 top-2 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Register</button>
        </form>
    )
}

export default Form;
