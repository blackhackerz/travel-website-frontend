import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Travel Demo | Devvance",
	description: "Demo for travel website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="robots" content="noindex" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
