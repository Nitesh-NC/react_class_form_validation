import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import Button from './components/Button';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch data that is stored locally 
        const data = localStorage.getItem("userData");
        const storedData = JSON.parse(data); 
            if (storedData.email === email && storedData.password === password) {
                navigate("/frontpage");
            } else {
                setError("Invalid email or password");
            }
        
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            <form onSubmit={handleSubmit}>
            <h1 className='font-bold text-xl'>Log in</h1>
                <label className="block text-left">Email</label>
                <input
                    type="email"
                    placeholder='abc@gmail.com'
                    value={email}
                    className='w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="block text-left">Password</label>
                <div className='relative w-full'>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='password'
                        value={password}
                        className='w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
            

                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className='flex justify-between items-center'>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Login
                </button>
                {/* <Button btn="Login" btnClick={handleSubmit} /> */}
                <button
                    type='button'
                    className='text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded'
                    onClick={() => navigate('/')}
                >
                    Register
                </button>
            </div>
            </form>
        </div>
    );
};

export default Login;
