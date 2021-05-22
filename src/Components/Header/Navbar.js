import React,{useState,useEffect} from 'react';
import './Navbar.scss';
import NavbarMobile from './NavbarMobile';
import NavBarFixed from './NavbarFixed';

function Navbar(props) {

    
    const [navShow, setNavShow  ] = useState (true);
    
    
    
   

  const windowHandler= () =>{
 

    if(window.innerWidth<= 850){

        setNavShow(false);
      
    }
    else

    {
        setNavShow(true);       


    }

  
    }

    useEffect(()=>{
        windowHandler();
         
    
    
    
        });
    
    window.addEventListener( "resize", windowHandler );
       
  
    const handleClickHome=()=>{

    
        props.about.current.scrollIntoView({ behavior: 'smooth' });
    
   }
        
    return (

       <header ref={props.home}>

      

        {navShow? <NavBarFixed home={props.home} projects={props.projects} about={props.about} contact={props.contact}></NavBarFixed>:<NavbarMobile  home={props.home} projects={props.projects} about={props.about} contact={props.contact}></NavbarMobile>}
        

        <div className= "titleHeader"> 
              
              <h1>W E L C O M E </h1> 
              <h2> I'm Alejandro, </h2> 
              <h2> a Software Engineer</h2> 
             <div> <h3 onClick={handleClickHome}>About me</h3> <span  onClick={handleClickHome} className='icon-circle-down'></span></div> 
                

                

          </div>

     </header>
    
    
    )
}

export default Navbar











