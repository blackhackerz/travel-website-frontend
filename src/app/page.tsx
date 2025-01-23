"use client";
import HeroSection from "@/components/home/hero-section";
import HomeAbout from "@/components/home/home-about";
import Sponsors from "@/components/home/sponsors";
import Gallery from "@/components/home/gallery";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	useEffect(() => {
		if (isVisible) {
			gsap.to(buttonRef.current, { opacity: 1, y: 0, duration: 0.5 });
		} else {
			gsap.to(buttonRef.current, { opacity: 0, y: 50, duration: 0.5 });
		}
	}, [isVisible]);

	useEffect(() => {
		if (isVisible) {
			gsap.to(buttonRef.current, {
				boxShadow: "0 0 20px rgba(255, 165, 0, 0.8)",
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
				duration: 1,
			});
		} else {
			gsap.to(buttonRef.current, { boxShadow: "none", duration: 0.5 });
		}
	}, [isVisible]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			ref={buttonRef}
			onClick={scrollToTop}
			style={{
				position: "fixed",
				bottom: "2rem",
				right: "2rem",
				width: "3rem",
				height: "3rem",
				backgroundColor: "#000",
				color: "orange",
				border: "none",
				borderRadius: "50%",
				cursor: "pointer",
				opacity: 0,
				transform: "translateY(50px)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				transition: "all 0.3s ease-in-out",
			}}>
			<span style={{ fontSize: "1.5rem", color: "orange" }}>↑</span>
			<style jsx>{`
				@media (max-width: 768px) {
					button {
						width: 2.5rem;
						height: 2.5rem;
						bottom: 1.5rem;
						right: 1.5rem;
					}
					span {
						font-size: 1.25rem;
					}
				}
				@media (max-width: 480px) {
					button {
						width: 2rem;
						height: 2rem;
						bottom: 1rem;
						right: 1rem;
					}
					span {
						font-size: 1rem;
					}
				}
			`}</style>
		</button>
	);
}

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Sponsors />
			<HomeAbout />
			<Gallery />
			<ScrollToTopButton />
		</div>
	);
}
