"use client";
import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import { gsap } from "gsap";

const HeroSection: React.FC = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const scrollTextRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const tl = gsap.timeline();
		if (titleRef.current) {
			tl.fromTo(
				titleRef.current,
				{ opacity: 0, y: -50 },
				{ opacity: 1, y: 0, duration: 1, ease: "power3.out" },
			);
		}
		if (subtitleRef.current) {
			tl.fromTo(
				subtitleRef.current,
				{ opacity: 0, y: -50 },
				{ opacity: 1, y: 0, duration: 1, ease: "power3.out" },
				"-=0.5",
			);
		}
		if (buttonRef.current) {
			tl.fromTo(
				buttonRef.current,
				{ opacity: 0, scale: 0.8 },
				{ opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
				"-=0.5",
			);
		}
		if (scrollTextRef.current) {
			gsap.fromTo(
				scrollTextRef.current,
				{ y: 0 },
				{ y: -20, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut" },
			);
		}
	}, []);

	return (
		<div
			className="relative flex items-center justify-center h-screen bg-cover bg-center -mt-16 overflow-hidden"
			style={{ backgroundImage: "url('/hero-bg.webp')" }}>
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>
			<div className="relative flex flex-col items-center justify-center text-center text-white px-4 pb-16">
				<h1
					ref={titleRef}
					className="text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 opacity-0">
					Explore the World
				</h1>
				<p
					ref={subtitleRef}
					className="text-xl md:text-2xl mb-6 md:mb-10 opacity-0">
					Discover new places and adventures
				</p>
				<button
					ref={buttonRef}
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-12 text-lg md:text-2xl rounded transition duration-300 ease-in-out transform hover:scale-105 select-none opacity-0"
					onClick={() => {
						const element = document.getElementById("sponsors");
						element?.scrollIntoView({ behavior: "smooth" });
					}}>
					Know more
				</button>
			</div>
			<div
				ref={scrollTextRef}
				className="absolute bottom-24 left-0 w-full flex justify-center select-none cursor-pointer"
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
