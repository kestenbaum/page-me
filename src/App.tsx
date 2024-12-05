import Header from './components/Header/Header';
import Intro from "./components/Intro/Intro";
import {Skills} from "./components/Skills/Skills";
import {Work} from "./components/Work/Work";
import {Contact} from "./components/Contact/Contact";
import Container from "./components/Container/Container";

import './index.css';

const App = () => {
    return (
            <Container>
                <Header/>
                <Intro/>
                <Skills/>
                <Work/>
                <Contact/>
            </Container>
    );
};

export default App;
