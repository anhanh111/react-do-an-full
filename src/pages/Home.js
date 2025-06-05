import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import AppSection from "../components/AppSection";
function Home() {
    return (
        <>

            <Hero />
            <About />
            <Menu />
            <ContactSection />
            <Services />
             <AppSection />
            <Footer />
        </>
    );
}

export default Home;
