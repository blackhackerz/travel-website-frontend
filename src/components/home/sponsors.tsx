import React from "react";
import Image from "next/image";

const sponsors = [
	{ name: "Sponsor 1", logo: "/logo1.png" },
	{ name: "Sponsor 2", logo: "/logo2.png" },
	{ name: "Sponsor 3", logo: "/logo3.png" },
	{ name: "Sponsor 4", logo: "/logo4.png" },
];

const Sponsors: React.FC = () => {
	return (
		<section className="py-12 bg-gray-100" id="sponsors">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
				<div className="flex flex-wrap justify-center items-center">
					{sponsors.map((sponsor, index) => (
						<div key={index} className="m-8">
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
