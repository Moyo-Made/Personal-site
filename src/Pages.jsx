import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

const Pages = () => {
	const emailAddress = "adegbitemoyomade2004@gmail.com";
	return (
		<div>
			<Navbar />
			<Hero email={emailAddress} />
			<About />
			<Portfolio />
			<Skills />
			<Services />
			<ContactForm />
			<Footer email={emailAddress} />
		</div>
	);
};

export default Pages;
