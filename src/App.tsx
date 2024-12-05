import Header from './components/Header/Header';
import Intro from "./components/Intro/Intro";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {Contact} from "./components/Contact/Contact";
import Container from "./components/Container/Container";

import './index.css';

const App = () => {
    return (
            <Container>
                <Header/>
                <Intro/>
                <Skills/>
                <Works/>
                <Contact/>
            </Container>
    );
};

export default App;
