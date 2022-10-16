import './App.css';
import { Body } from './components/content_1/Body';
import { Content2 } from './components/content_2/Content2';
import { Content3 } from './components/content_3/Content3';
import { Content4 } from './components/content_4/Content4';
import { Content6 } from './components/content_5/Content6';
import { Footer } from './components/Footer/Footer';
import {Menu} from "./components/Menu/Menu"

function App() {
  return (
    <div className='main'>
    <Menu/>
    <Body />
    <Content2 />
    <Content3 />
    <Content4 />
    <Content6 />
    <Footer />
    </div>
  );
}

export default App;
