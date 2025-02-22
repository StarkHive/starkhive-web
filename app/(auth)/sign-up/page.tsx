"use client";
import { signup_logo } from "@/public/assets/images";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Input = ({
	label,
	type,
	name,
	placeholder,
}: {
	label: string;
	type: string;
	name: string;
	placeholder: string;
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === "password";

	return (
		<div className="flex flex-col gap-1 relative">
			<label htmlFor={name} className=" text-white">
				{label}
			</label>
			<div className="relative">
				<input
					type={isPassword && showPassword ? "text" : type}
					id={name}
					name={name}
					required
					placeholder={placeholder}
					className={`p-3 border border-gray-400 focus:border-white rounded-lg outline-none bg-transparent text-white w-full ${
						isPassword && "pr-10"
					}`}
				/>
				{isPassword && (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 right-3 flex items-center text-white"
					>
						{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				)}
			</div>
		</div>
	);
};

export default function SignIn() {
	return (
		<main className="flex">
			<section className="relative w-[50%] hidden lg:block">
				<Image src={signup_logo} fill className=" object-cover" alt="signupImg" />
			</section>

			<section className="w-full lg:w-[50%] h-screen flex flex-col justify-center items-center bg-[#001219]">
				<div className=" w-[80%] lg:w-[70%] md:p-6 mt-6 flex flex-col gap-8">
					<div className="text-center">
						<h1 className="text-3xl font-semibold text-[#0FA5AA]">Create Account</h1>
						<p className="text-gray-400 mt-2">Join us today</p>
					</div>

					<form className="flex flex-col gap-4">
						<Input
							label="Username"
							type="text"
							name="username"
							placeholder="Choose a username"
						/>
						<Input
							label="Email"
							type="email"
							name="email"
							placeholder="Enter your email"
						/>
						<Input
							label="Password"
							type="password"
							name="password"
							placeholder="Enter your password"
						/>
						<Input
							label="Confirm Password"
							type="password"
							name="confirmPassword"
							placeholder="Confirm your password"
						/>

						<button className="bg-[#0FA5AA] text-white p-2 rounded-lg w-full mt-5 transition-all duration-300">
							Sign Up
						</button>

						<p className="text-center mt-4 text-gray-400">
							Already have an account?{" "}
							<Link href="/sign-in" className="text-[#0FA5AA] cursor-pointer">
								Sign in
							</Link>
						</p>
					</form>
				</div>
			</section>
		</main>
	);
}
