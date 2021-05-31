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
       
  
   
        
    return (

       <header ref={props.home}>

      

        {navShow? <NavBarFixed home={props.home} projects={props.projects} about={props.about} contact={props.contact}></NavBarFixed>:<NavbarMobile  home={props.home} projects={props.projects} about={props.about} contact={props.contact}></NavbarMobile>}
        

        <div className= "titleHeader"> 
              
              <h1> Alejandro Iriarte Serpico</h1> 
              <h2> Product Manager & Software Engineer</h2> 
            
              <h3> English-Spanish </h3> 


             

              
          
                

                

          </div>

     </header>
    
    
    )
}

export default Navbar











