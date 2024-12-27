import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";
import Features from "./section/Features.jsx";
import Pricing from "./section/Pricing.jsx";
import Faq from "./section/Faq.jsx";
import Testimonials from "./section/Testimonials.jsx";
import Download from "./section/Download.jsx";
import Footer from "./section/Footer.jsx";

const App = () => {
    return (
        <main className="overflow-hidden">
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <Testimonials />
            <Download />
            <Footer />

        </main>
    )
}
export default App
