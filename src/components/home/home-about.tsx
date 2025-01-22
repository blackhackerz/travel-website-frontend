import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface CardProps {
	src: string;
	alt: string;
	title: string;
	description: string;
}

const cardsData: CardProps[] = [
	{
		src: "/path/to/image1.jpg",
		alt: "Description of image 1",
		title: "Card 1 Title",
		description:
			"This is a description for card 1. It provides more details about the content of the card.",
	},
	{
		src: "/path/to/image2.jpg",
		alt: "Description of image 2",
		title: "Card 2 Title",
		description:
			"This is a description for card 2. It provides more details about the content of the card.",
	},
	{
		src: "/path/to/image3.jpg",
		alt: "Description of image 3",
		title: "Card 3 Title",
		description:
			"This is a description for card 3. It provides more details about the content of the card.",
	},
	{
		src: "/path/to/image4.jpg",
		alt: "Description of image 4",
		title: "Card 4 Title",
		description:
			"This is a description for card 4. It provides more details about the content of the card.",
	},
];

const HomeAbout: React.FC = () => {
	return (
		<section className="flex flex-col md:flex-row p-8 bg-gray-900 text-white">
			<div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 flex flex-col justify-center">
				<h2 className="text-3xl font-bold mb-4">About Us</h2>
				<p className="text-lg mb-4">
					Welcome to our travel site! We are dedicated to providing you with the
					best travel experiences. Explore our curated travel packages and
					discover new destinations.
				</p>
				<ul className="list-disc list-inside mb-4 space-y-2 text-lg text-gray-300">
					<li className="flex items-center">
						<CheckCircleIcon className="h-6 w-6 text-orange-500 mr-2" /> Expert
						travel guides
					</li>
					<li className="flex items-center">
						<CheckCircleIcon className="h-6 w-6 text-orange-500 mr-2" /> Curated
						travel packages
					</li>
					<li className="flex items-center">
						<CheckCircleIcon className="h-6 w-6 text-orange-500 mr-2" />{" "}
						Exclusive destinations
					</li>
					<li className="flex items-center">
						<CheckCircleIcon className="h-6 w-6 text-orange-500 mr-2" /> 24/7
						customer support
					</li>
				</ul>
				<button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-40">
					Learn More
				</button>
			</div>
			<div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
				{cardsData.map((card, index) => (
					<div
						key={index}
						className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg p-6 rounded-lg flex flex-col items-start card-hover move-border">
						<Image
							src={card.src}
							alt={card.alt}
							width={64}
							height={64}
							className="w-16 h-16 mb-4 rounded-full object-cover"
						/>
						<h3 className="text-xl font-semibold mb-2">{card.title}</h3>
						<p className="text-gray-400">{card.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeAbout;
