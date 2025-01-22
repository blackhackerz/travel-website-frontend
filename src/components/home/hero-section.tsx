"use client";
import React from "react";
import "tailwindcss/tailwind.css";

const HeroSection: React.FC = () => {
	return (
		<div
			className="relative flex items-center justify-center h-screen bg-cover bg-center -mt-16 overflow-hidden"
			style={{ backgroundImage: "url('/background.png')" }}>
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>
			<div className="relative flex flex-col items-center justify-center text-center text-white px-4 pb-16">
				<h1 className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
					Explore the World
				</h1>
				<p className="text-xl md:text-2xl mb-6 md:mb-10">
					Discover new places and adventures
				</p>
				<button
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-12 text-lg md:text-2xl rounded transition duration-300 ease-in-out transform hover:scale-105 select-none"
					onClick={() => {
						const element = document.getElementById("sponsors");
						element?.scrollIntoView({ behavior: "smooth" });
					}}>
					Know more
				</button>
			</div>
			<div
				className="absolute bottom-24 left-0 w-full flex justify-center animate-bounce select-none cursor-pointer"
				onClick={() => {
					const element = document.getElementById("sponsors");
					element?.scrollIntoView({ behavior: "smooth" });
				}}>
				<p className="text-white text-opacity-50 text-lg md:text-xl">
					Scroll for more
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
