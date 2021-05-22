import './App.css';
import {useRef} from 'react';
import Navbar from './Components/Header/Navbar';
import About from './Components/Sections/About';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';



function App() {
  
  const refHome = useRef();
  const refAboutMe = useRef();
  const refProjects = useRef();
  const refContact = useRef();



  return (
    <div >
     

      <Navbar home={refHome} projects={refProjects} about={refAboutMe} contact={refContact}></Navbar>

      <About about={refAboutMe} ></About>
      <Projects projects={refProjects}></Projects>
      <Contact  contact={refContact} ></Contact>

      

      



    </div>
  );
}

export default App;
