import './index.css';
import Container from "@/components/Container/Container";
import Header from "@/components/Header/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";

const App = () => {
    const sections = [
        <Header key="header" />,
        <Hero key="hero" />,
        <Skills key="skills" />,
        <Portfolio key="portfolio" />,
        <Contact key="contact" />
    ];

    return <Container>{sections}</Container>;
};

export default App;
