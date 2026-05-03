import { Toaster } from 'react-hot-toast';

import './index.css';
import Contact from '@/components/Contact/Contact';
import Container from '@/components/Container/Container';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Portfolio from '@/components/Portfolio/Portfolio';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Skills from '@/components/Skills/Skills';

const App = () => {
  const sections = [
    <Header key="header" />,
    <Hero key="hero" />,
    <Skills key="skills" />,
    <Portfolio key="portfolio" />,
    <Contact key="contact" />,
  ];

  return (
    <Container>
      {sections}
      <ScrollToTop />
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  );
};

export default App;
