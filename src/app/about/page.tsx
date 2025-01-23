"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const AboutPage = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			".image",
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.3 },
		).fromTo(
			".text",
			{ opacity: 0, x: -50 },
			{ opacity: 1, x: 0, duration: 1.5, ease: "power3.out", stagger: 0.4 },
			"-=1",
		);

		gsap.fromTo(
			".heading",
			{ opacity: 0, scale: 0.8 },
			{ opacity: 1, scale: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" },
		);

		const images = document.querySelectorAll(".image");
		images.forEach((image) => {
			image.addEventListener("mouseenter", () => {
				gsap.to(image, { scale: 1.05, duration: 0.7, ease: "power3.out" });
			});
			image.addEventListener("mouseleave", () => {
				gsap.to(image, { scale: 1, duration: 0.7, ease: "power3.out" });
			});
		});
	}, []);

	return (
		<div className="flex flex-col items-center justify-center p-4 md:p-10 pt-20 h-full text-center bg-gray-900 overflow-hidden">
			<div className="flex flex-col md:flex-row items-center gap-4 w-full mb-10">
				<div className="flex justify-center w-full md:w-1/2">
					<Image
						className="image object-cover rounded-lg shadow-lg"
						src="/image1.webp"
						alt="Image 1"
						width={800}
						height={300} // Adjusted height
						style={{ objectFit: "contain" }}
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
					<h1 className="heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-orange-500">
						About Us
					</h1>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify mb-4">
						Welcome to our travel site! We are dedicated to providing you with
						the best travel experiences. Explore our curated travel packages and
						discover new destinations.
					</p>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify mb-4">
						Our team of travel experts is here to help you plan your perfect
						vacation. Whether you&apos;re looking for adventure, relaxation, or
						cultural experiences, we have something for everyone.
					</p>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify">
						Join us on a journey to explore the world&apos;s most beautiful
						places. Your adventure starts here!
					</p>
				</div>
			</div>

			{/* New Section 1 */}
			<div className="flex flex-col md:flex-row items-center gap-4 w-full mb-10">
				<div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
					<h2 className="heading text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-orange-500">
						Our Mission
					</h2>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify mb-4">
						Our mission is to make travel accessible and enjoyable for everyone.
						We believe that travel has the power to transform lives and create
						unforgettable memories. We strive to offer a wide range of travel
						options that cater to different tastes and budgets, ensuring that
						everyone can find something that suits their needs.
					</p>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify mb-4">
						We are committed to providing exceptional service and personalized
						travel experiences that cater to your unique needs and preferences.
						Our team works tirelessly to ensure that every aspect of your trip
						is meticulously planned and executed, so you can focus on enjoying
						your journey.
					</p>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify">
						We believe in responsible and sustainable travel. We aim to minimize
						our environmental impact and support local communities by promoting
						eco-friendly practices and partnering with local businesses.
					</p>
				</div>
				<div className="flex justify-center w-full md:w-1/2">
					<Image
						className="image object-cover rounded-lg shadow-lg"
						src="/image2.webp"
						alt="Image 2"
						width={800}
						height={300} // Adjusted height
						style={{ objectFit: "contain" }}
						loading="lazy"
					/>
				</div>
			</div>

			{/* New Section 2 */}
			<div className="flex flex-col md:flex-row items-center gap-4 w-full mt-10">
				<div className="flex justify-center w-full md:w-1/2">
					<Image
						className="image object-cover rounded-lg shadow-lg"
						src="/image3.webp"
						alt="Image 3"
						width={800}
						height={300} // Adjusted height
						style={{ objectFit: "contain" }}
						loading="lazy"
					/>
				</div>
				<div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
					<h2 className="heading text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-orange-500">
						Our Vision
					</h2>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify mb-2 md:mb-4">
						Our vision is to be the leading travel company that inspires and
						enables people to explore the world. We aim to create a community of
						travel enthusiasts who share a passion for discovering new places
						and cultures.
					</p>
					<p className="text text-base md:text-lg lg:text-xl text-gray-300 text-justify">
						We strive to innovate and continuously improve our services to
						provide you with the best travel experiences possible.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
