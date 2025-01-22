"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaInfoCircle, FaSuitcase, FaEnvelope } from "react-icons/fa";

const NavBar: React.FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const pathname = usePathname();

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const isActive = (path: string) => pathname === path;

	return (
		<>
			<nav className="bg-black bg-opacity-20 p-4 sticky top-0 z-10">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center space-x-4">
						<Link
							href="/"
							className="text-white text-2xl font-bold select-none cursor-pointer">
							Travel Demo
						</Link>
					</div>
					<div className="ml-auto block lg:hidden">
						<button
							className="text-white focus:outline-none"
							onClick={toggleSidebar}>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"></path>
							</svg>
						</button>
					</div>
					<ul className="hidden lg:flex space-x-8">
						<li>
							<Link
								href="/"
								className={`text-xl flex items-center transition duration-500 ease-in-out transform hover:scale-105 ${
									isActive("/")
										? "text-orange-400"
										: "text-white hover:text-gray-300"
								}`}>
								<FaHome className="mr-2" /> Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={`text-xl flex items-center transition duration-500 ease-in-out transform hover:scale-105 ${
									isActive("/about")
										? "text-orange-400"
										: "text-white hover:text-gray-300"
								}`}>
								<FaInfoCircle className="mr-2" /> About
							</Link>
						</li>
						<li>
							<Link
								href="/services"
								className={`text-xl flex items-center transition duration-500 ease-in-out transform hover:scale-105 ${
									isActive("/services")
										? "text-orange-400"
										: "text-white hover:text-gray-300"
								}`}>
								<FaSuitcase className="mr-2" /> Services
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className={`text-xl flex items-center transition duration-500 ease-in-out transform hover:scale-105 ${
									isActive("/contact")
										? "text-orange-400"
										: "text-white hover:text-gray-300"
								}`}>
								<FaEnvelope className="mr-2" /> Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			{/* Sidebar */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-500 ease-in-out ${
					isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={toggleSidebar}></div>
			<div
				className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-30 transform transition-transform duration-500 ease-in-out backdrop-blur-md p-4 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}>
				<div className="flex justify-end">
					<button
						className="text-white focus:outline-none"
						onClick={toggleSidebar}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
				<ul className="mt-4 space-y-4 flex flex-col items-center flex-grow justify-center">
					<li>
						<Link
							href="/"
							className={`text-2xl flex items-center ${
								isActive("/") ? "text-orange-400" : "text-white"
							}`}
							onClick={toggleSidebar}>
							<FaHome className="mr-2" /> Home
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`text-2xl flex items-center ${
								isActive("/about") ? "text-orange-400" : "text-white"
							}`}
							onClick={toggleSidebar}>
							<FaInfoCircle className="mr-2" /> About
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className={`text-2xl flex items-center ${
								isActive("/services") ? "text-orange-400" : "text-white"
							}`}
							onClick={toggleSidebar}>
							<FaSuitcase className="mr-2" /> Services
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className={`text-2xl flex items-center ${
								isActive("/contact") ? "text-orange-400" : "text-white"
							}`}
							onClick={toggleSidebar}>
							<FaEnvelope className="mr-2" /> Contact
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
