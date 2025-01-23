"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactPage: React.FC = () => {
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		gsap.fromTo(
			".contact-form",
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, duration: 1.5, ease: "expo.out" },
		);

		gsap.fromTo(
			".form-element",
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				stagger: 0.2,
				ease: "power4.out",
			},
		);

		gsap.fromTo(
			".contact-form",
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: ".contact-form",
					start: "top 80%",
					end: "top 60%",
					scrub: true,
				},
			},
		);
	}, []);

	useEffect(() => {
		if (showAlert) {
			gsap.fromTo(
				".alert",
				{ opacity: 0, y: -20 },
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
			);
		}
	}, [showAlert]);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setShowAlert(true);

		setTimeout(() => {
			gsap.to(".alert", {
				opacity: 0,
				y: -20,
				duration: 0.5,
				ease: "power2.in",
			});
			setShowAlert(false);
		}, 3000);
	};

	const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
		const button = event.currentTarget;
		const rect = button.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const tiltX = (y / rect.height - 0.5) * 10;
		const tiltY = (x / rect.width - 0.5) * -10;

		gsap.to(button, {
			rotationX: tiltX,
			rotationY: tiltY,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
		const button = event.currentTarget;
		gsap.to(button, {
			rotationX: 0,
			rotationY: 0,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	return (
		<section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen flex justify-center items-center px-4">
			<div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-xl contact-form">
				<h1 className="text-orange-400 text-center text-4xl font-semibold mb-6">
					Get in Touch
				</h1>

				{showAlert && (
					<div className="alert bg-green-600 text-white p-3 rounded-md mb-4 text-center">
						Form submitted successfully!
					</div>
				)}

				<form
					className="flex flex-col w-full space-y-6"
					onSubmit={handleSubmit}>
					<div className="flex flex-col form-element">
						<label className="mb-2 text-orange-400 font-medium" htmlFor="name">
							Your Name:
						</label>
						<input
							className="p-3 rounded-lg border-2 border-orange-400 bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
						/>
					</div>

					<div className="flex flex-col form-element">
						<label className="mb-2 text-orange-400 font-medium" htmlFor="email">
							Email Address:
						</label>
						<input
							className="p-3 rounded-lg border-2 border-orange-400 bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
						/>
					</div>

					<div className="flex flex-col form-element">
						<label
							className="mb-2 text-orange-400 font-medium"
							htmlFor="message">
							Your Message:
						</label>
						<textarea
							className="p-3 rounded-lg border-2 border-orange-400 bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
							id="message"
							name="message"
							rows={5}
							placeholder="Write your message here..."></textarea>
					</div>

					<button
						className="submit-button py-3 px-6 rounded-lg bg-orange-500 text-gray-900 cursor-pointer font-semibold transition-all hover:bg-orange-600 active:scale-95"
						type="submit"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactPage;
