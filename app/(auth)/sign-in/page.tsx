"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex min-h-screen">
      <div className="relative w-1/2 h-screen hidden lg:block">
        <Image
          src="/assets/images/login-image.jpeg"
          fill
          className="object-cover"
          alt="Login Illustration"
        />
      </div>

      <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center items-center bg-[#001219]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#0FA5AA]">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <form className="w-[80%] lg:w-[70%] md:p-6 mt-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-400 focus:border-white rounded-lg outline-none bg-transparent text-white"
            />
          </div>

          <div className="flex flex-col mt-4 relative">
            <label htmlFor="password" className="mb-1 text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="p-2 pr-10 border border-gray-400 focus:border-white rounded-lg outline-none bg-transparent text-white w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button className="bg-[#0FA5AA] text-white p-2 rounded-lg w-full mt-5 hover:scale-105 transition-all duration-300">
            Sign In
          </button>

          <p className="text-center mt-4 text-gray-400">
            {"Don't"} have an account?{" "}
            <span className="text-[#0FA5AA] cursor-pointer">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
