import About from "./components/About";
// import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

const Pages = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Portfolio />
			<Skills />
			<Services />
			{/* <ContactForm /> */}
		</div>
	);
};

export default Pages;
