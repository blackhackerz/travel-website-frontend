"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Footer: React.FC = () => {
	const iconRefs = useRef<(HTMLAnchorElement | null)[]>([]);

	useEffect(() => {
		iconRefs.current.forEach((icon, index) => {
			if (icon) {
				gsap.fromTo(
					icon,
					{ opacity: 0, y: 20 },
					{ opacity: 1, y: 0, delay: index * 0.2, duration: 0.5 },
				);

				icon.addEventListener("mouseenter", () => {
					gsap.to(icon, { y: -10, duration: 0.3, ease: "power1.out" });
				});

				icon.addEventListener("mouseleave", () => {
					gsap.to(icon, { y: 0, duration: 0.3, ease: "power1.out" });
				});
			}
		});
	}, []);

	return (
		<footer className="bg-gray-800 text-white py-8">
			<link
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
				integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
				crossOrigin="anonymous"
			/>

			<div className="container mx-auto text-center">
				<p className="text-lg font-semibold">
					&copy; {new Date().getFullYear()} Travel Demo. All rights reserved.
				</p>
				<nav>
					<ul className="flex justify-center space-x-8 mt-4">
						<li>
							<Link href="#home" className="hover:underline text-lg">
								Home
							</Link>
						</li>
						<li>
							<Link href="#about" className="hover:underline text-lg">
								About
							</Link>
						</li>
						<li>
							<Link href="#services" className="hover:underline text-lg">
								Services
							</Link>
						</li>
						<li>
							<Link href="#contact" className="hover:underline text-lg">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				{/* Social Media Icons with Colors */}
				<ul className="flex justify-center space-x-6 mt-6">
					<li>
						<Link
							ref={(el) => {
								iconRefs.current[0] = el;
							}}
							href="https://x.com/devvancedev"
							className="relative w-16 h-16 bg-white text-center rounded-full flex items-center justify-center"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-twitter text-blue-400 icon"></i>
							<span className="absolute top-100 left-0 w-full h-full bg-blue-400 opacity-0"></span>
						</Link>
					</li>
					<li>
						<Link
							ref={(el) => {
								iconRefs.current[1] = el;
							}}
							href="https://www.linkedin.com/company/devvance"
							className="relative w-16 h-16 bg-white text-center rounded-full flex items-center justify-center"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-linkedin-in text-blue-700 icon"></i>
							<span className="absolute top-100 left-0 w-full h-full bg-blue-700 opacity-0"></span>
						</Link>
					</li>
					<li>
						<Link
							ref={(el) => {
								iconRefs.current[2] = el;
							}}
							href="https://www.instagram.com/devvancedev/"
							className="relative w-16 h-16 bg-white text-center rounded-full flex items-center justify-center"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-instagram text-pink-600 icon"></i>
							<span className="absolute top-100 left-0 w-full h-full bg-pink-600 opacity-0"></span>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
