"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const images = [
	"/image1.webp",
	"/image2.webp",
	"/image3.webp",
	"/image4.webp",
	"/image5.webp",
	"/image6.webp",
];

const Gallery: React.FC = () => {
	const galleryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							entry.target.children,
							{ opacity: 0, y: 50 },
							{ opacity: 1, y: 0, duration: 1, stagger: 0.2 },
						);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 },
		);

		const currentGalleryRef = galleryRef.current;
		if (currentGalleryRef) {
			observer.observe(currentGalleryRef);
		}

		return () => {
			if (currentGalleryRef) {
				observer.unobserve(currentGalleryRef);
			}
		};
	}, []);

	return (
		<section className="bg-gray-900 text-white p-4 py-10" id="gallery">
			<h2 className="text-3xl font-bold mb-4 text-center">Travel Images</h2>
			<div
				ref={galleryRef}
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
				{images.map((image, index) => (
					<div key={index} className="relative w-full h-64">
						<Image
							src={image}
							alt={`Gallery image ${index + 1}`}
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;
