import Header from './components/Header/Header';
import Intro from "./components/Intro/Intro";
import {Skills} from "./components/Skills/Skills";
import {Work} from "./components/Work/Work";
import {Contact} from "./components/Contact/Contact";
import './index.css';

const App = () => {
    return (
            <div className='container'>
                <Header/>
                <Intro/>
                <Skills/>
                <Work/>
                <Contact/>
            </div>
    );
};

export default App;
