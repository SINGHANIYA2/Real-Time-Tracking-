import React, { useState } from "react";
export default function LogIn({ setLoginpage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function Emailhadler(event) {
        setEmail(event.target.value);
    }

    function Passwordhandler(event) {
        setPassword(event.target.value);
    }
    function SubmitHandler(e) {
        e.preventDefault();

        fetch("http://localhost:5000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("LOGIN RESPONSE 👉", data);
                if (data.success) {

                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));

                    alert("Login Successful! ✅");

                    
                    setLoginpage(false);

                    if (data.user.role === 'admin') {
                        router.push('/admin/dashboard');
                    } else {
                        router.push('/track');
                    }

                } else {
                    alert(data.message || "Login Failed");
                }
            })
            .catch((err) => {
                console.log("ERROR 👉", err);
            });
    }

    return (
        <div className="flex justify-center items-center font-sans">

            <div className="w-[90%] max-w-[480px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative">
                <div className="relative rounded-t-2xl px-10 pt-10 pb-16 text-white bg-gradient-to-br from-blue-900 via-blue-500 to-emerald-500">
                    <button aria-label="Close Modal"
                        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl hover:bg-white/30 transition cursor-pointer" onClick={() => setLoginpage(false)}>
                        <i className="fas fa-times"></i>
                    </button>

                    <div className="text-center">

                        <div className="w-20 h-20 mx-auto mb-5 bg-white rounded-full flex items-center justify-center">
                            <i className="fas fa-sign-in-alt text-blue-900 text-[40px]"></i>
                        </div>

                        <h2 className="text-3xl font-extrabold mb-2">Login</h2>
                        <p className="text-sm opacity-95">
                            Enter your email - Admin access granted for verified emails
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-10 -mt-8 relative z-10">
                    <form className="space-y-6">


                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <i className="fas fa-envelope text-blue-500 mr-1"></i>
                                Email Address
                            </label>
                            <input type="email" placeholder="Enter your email" required onChange={Emailhadler}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm
                        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"/>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                <i className="fas fa-lock text-blue-500 mr-1"></i>
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    onChange={Passwordhandler}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm
                            focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                                />

                                <button
                                    type="button"
                                    aria-label="Toggle Password"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-500">
                                <input
                                    type="checkbox"
                                    className="accent-blue-500 w-4 h-4"
                                />
                                Remember me
                            </label>

                            <a href="#" className="text-blue-500 font-semibold hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            onClick={SubmitHandler}
                            className="w-full py-4 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-2">
                            <i className="fas fa-sign-in-alt"></i>
                            Sign In
                        </button>

                        {/* Signup */}
                        <p className="text-center text-sm text-gray-500"> Don&apos;t have an account?{" "}
                            <a href="#" className="text-blue-500 font-bold hover:underline">
                                Sign Up
                            </a>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}