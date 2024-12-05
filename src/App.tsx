import { Header, Intro, Skills, Works, Contact, Container } from '@/components';
import './index.css';

const App = () => {
    const sections = [
        <Header key="header" />,
        <Intro key="intro" />,
        <Skills key="skills" />,
        <Works key="works" />,
        <Contact key="contact" />
    ];

    return <Container>{sections}</Container>;
};

export default App;
