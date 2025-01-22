import HeroSection from "@/components/home/hero-section";
import HomeAbout from "@/components/home/home-about";
import Sponsors from "@/components/home/sponsors";
import NavBar from "@/components/nav/nav";

export default function Home() {
	return (
		<div>
			<NavBar />
			<HeroSection />
			<Sponsors />
			<HomeAbout />
		</div>
	);
}
