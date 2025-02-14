import React, { useContext, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import { AppRoutes } from "../contant/contant";
import { AuthContext } from "../context/AuthContext";

const LoginComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const obj = {
            email: e.target[0].value,
            password: e.target[1].value,
        }
        axios.post(AppRoutes.login, obj)
            .then((res) => {
                setIsLoading(false)
                console.log("res in the checked login token==>", res?.data?.data?.user)
                setUser(res?.data?.data?.user)
                localStorage.setItem("token", res?.data?.data?.token)
                Swal.fire({
                    title: 'Login Successfully!',
                    icon: 'success',
                })
                Navho("/")
            }).catch((err) => {
                setIsLoading(false)
                console.log("err in the login=>", err)
                // console.log("err in the login=>", err.response.data.message)
                const errorMessage = err.response ? err.response.data.msg : err.message;
                Swal.fire({
                    title: 'SomThing Went Wrong!',
                    text: errorMessage,
                    icon: 'error',
                })
            })
    }
    return (
        <>
            <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
                {/* Logo */}
                {/* <div className="mb-3">
                <img
                    src={Logo} // Replace with your logo URL
                    alt="Logo"
                    className="h-24 w-24"
                />
            </div> */}

                {/* Form Container */}
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Login
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Address */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p className="ml-2 text-sm text-gray-700">
                                    Don't have an account?<Link to={'/signup'}><b className="ml-1 pointer hover:text-gray-800">Signup</b></Link>
                                </p>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        {isLoading ?
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >

                                <div className="flex justify-center" role="status">
                                    <svg
                                        aria-hidden="true"
                                        className="w-8 h-6 text-gray-200 animate-spin fill-blue-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </button>
                            :
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        }
                    </form>
                </div>
            </div>
        </>

    );
};

export default LoginComponent;

