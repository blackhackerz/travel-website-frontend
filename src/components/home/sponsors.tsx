"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
	{ name: "Sponsor 1", logo: "/logo1.webp" },
	{ name: "Sponsor 2", logo: "/logo2.webp" },
	{ name: "Sponsor 3", logo: "/logo3.webp" },
	{ name: "Sponsor 4", logo: "/logo4.webp" },
];

const Sponsors: React.FC = () => {
	const imageRefs = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		gsap.fromTo(
			imageRefs.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: "#sponsors",
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse",
				},
			},
		);

		imageRefs.current.forEach((el) => {
			el.addEventListener("mouseenter", () => {
				gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power3.out" });
			});

			el.addEventListener("mouseleave", () => {
				gsap.to(el, { scale: 1, duration: 0.3, ease: "power3.out" });
			});
		});
	}, []);

	return (
		<section className="py-12 bg-gray-900" id="sponsors">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8 text-white">
					Our Sponsors
				</h2>
				<div className="flex flex-wrap justify-center items-center gap-8">
					{sponsors.map((sponsor, index) => (
						<div
							key={index}
							className="bg-white p-4 rounded-lg shadow-lg"
							ref={(el) => {
								imageRefs.current[index] = el!;
							}}>
							<Image
								src={sponsor.logo}
								alt={sponsor.name}
								width={200}
								height={200}
								className="object-contain mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
<style jsx>{`
	.glass-effect {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
`}</style>;
