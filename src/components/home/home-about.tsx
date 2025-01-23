"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import styles from "./home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
	src: string;
	alt: string;
	title: string;
	description: string;
}

const cardsData: CardProps[] = [
	{
		src: "/image1.webp",
		alt: "Description of image 1",
		title: "Card 1 Title",
		description:
			"This is a description for card 1. It provides more details about the content of the card.",
	},
	{
		src: "/image2.webp",
		alt: "Description of image 2",
		title: "Card 2 Title",
		description:
			"This is a description for card 2. It provides more details about the content of the card.",
	},
	{
		src: "/image3.webp",
		alt: "Description of image 3",
		title: "Card 3 Title",
		description:
			"This is a description for card 3. It provides more details about the content of the card.",
	},
	{
		src: "/image4.webp",
		alt: "Description of image 4",
		title: "Card 4 Title",
		description:
			"This is a description for card 4. It provides more details about the content of the card.",
	},
];

const HomeAbout: React.FC = () => {
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const leftSectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");

		const animateCards = () => {
			const animations = [];

			if (mediaQuery.matches) {
				animations.push(
					gsap.from(cardsRef.current, {
						scale: 0.5,
						opacity: 0,
						duration: 1,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: cardsRef.current,
							start: "top 100%",
							end: "bottom 10%",
							toggleActions: "play none none none",
							onLeave: () => gsap.killTweensOf(cardsRef.current),
							onEnterBack: () => gsap.killTweensOf(cardsRef.current),
							onLeaveBack: () =>
								gsap.set(cardsRef.current, { clearProps: "all" }),
						},
					}),
				);
				animations.push(
					gsap.from(leftSectionRef.current, {
						scale: 0.5,
						opacity: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: leftSectionRef.current,
							start: "top 100%",
							end: "bottom 10%",
							toggleActions: "play none none none",
							onLeave: () => gsap.killTweensOf(leftSectionRef.current),
							onEnterBack: () => gsap.killTweensOf(leftSectionRef.current),
							onLeaveBack: () =>
								gsap.set(leftSectionRef.current, { clearProps: "all" }),
						},
					}),
				);
			} else {
				animations.push(
					gsap.from(cardsRef.current, {
						x: 200,
						opacity: 0,
						duration: 1,
						stagger: 0.2,
						ease: "power3.out",
						scrollTrigger: {
							trigger: cardsRef.current,
							start: "top 100%",
							end: "bottom 10%",
							toggleActions: "play none none none",
							onLeave: () => gsap.killTweensOf(cardsRef.current),
							onEnterBack: () => gsap.killTweensOf(cardsRef.current),
							onLeaveBack: () =>
								gsap.set(cardsRef.current, { clearProps: "all" }),
						},
					}),
				);
				animations.push(
					gsap.from(leftSectionRef.current, {
						x: -200,
						opacity: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: leftSectionRef.current,
							start: "top 100%",
							end: "bottom 10%",
							toggleActions: "play none none none",
							onLeave: () => gsap.killTweensOf(leftSectionRef.current),
							onEnterBack: () => gsap.killTweensOf(leftSectionRef.current),
							onLeaveBack: () =>
								gsap.set(leftSectionRef.current, { clearProps: "all" }),
						},
					}),
				);
			}

			return animations;
		};

		const animations = animateCards();
		mediaQuery.addEventListener("change", animateCards);

		return () => {
			mediaQuery.removeEventListener("change", animateCards);
			animations.forEach((animation) => animation.kill());
		};
	}, []);

	const scrollToGallery = () => {
		const gallerySection = document.getElementById("gallery");
		if (gallerySection) {
			gallerySection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="pt-10 pb-10 flex flex-col md:flex-row p-4 md:p-8 bg-gray-900 text-white">
			<div
				ref={leftSectionRef}
				className="md:w-1/2 mb-8 md:mb-0 md:mr-8 flex flex-col justify-center">
				<h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
				<p className="text-base md:text-lg mb-4">
					Welcome to our travel site! We are dedicated to providing you with the
					best travel experiences. Explore our curated travel packages and
					discover new destinations.
				</p>
				<ul className="list-disc list-inside mb-4 space-y-2 text-base md:text-lg text-gray-300">
					<li className="flex items-center">
						<CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-2" />{" "}
						Expert travel guides
					</li>
					<li className="flex items-center">
						<CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-2" />{" "}
						Curated travel packages
					</li>
					<li className="flex items-center">
						<CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-2" />{" "}
						Exclusive destinations
					</li>
					<li className="flex items-center">
						<CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mr-2" />{" "}
						24/7 customer support
					</li>
				</ul>
				<button
					onClick={scrollToGallery}
					className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full md:w-40">
					Learn More
				</button>
			</div>
			<div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
				{cardsData.map((card, index) => (
					<div
						key={index}
						ref={(el) => {
							if (el) cardsRef.current[index] = el;
						}}
						className={`bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg p-4 md:p-6 rounded-lg flex flex-col ${styles.card_home} hover:shadow-lg hover:shadow-orange-500/50`}>
						<Image
							src={card.src}
							alt={card.alt}
							width={64}
							height={64}
							className="w-12 h-12 md:w-16 md:h-16 mb-4 rounded-full object-cover"
							loading="lazy"
						/>
						<h3 className="text-lg md:text-xl font-semibold mb-2 text-left">
							{card.title}
						</h3>
						<p className="text-gray-400 text-sm md:text-base text-left">
							{card.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeAbout;
