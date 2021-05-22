import React,{useState,useEffect} from 'react'
import './NavbarMobile.scss'


function NavbarMobile(props) {
    
/********************************/    

/*Sets the initial value to the mobile navbar  */ 

/********************************/    
    
    const [showNavbar, setShowNavbar] = useState(false);
    

/********************************/    

/*Handles the COLOR of the navbar according to position of the screen against the sections */ 

/********************************/    


   const [indexHome, setIndexHome] = useState(true);
   const [indexAbout, setIndexAbout] = useState(false);
   const [indexProjects, setIndexProjects] = useState(false);
   const [indexContact, setIndexContact] = useState(false);


/********************************/    

/*Handles the COLOR of the navbar according to position of the screen against the sections */ 

/********************************/    

const handleColor=()=>{


    const home = props.home.current.getBoundingClientRect();
    const about = props.about.current.getBoundingClientRect();
    const projects = props.projects.current.getBoundingClientRect();    
    const contact = props.contact.current.getBoundingClientRect();


    const homeOnScreen= home.top < home.height*0.2 &&  home.top >= ((home.height * -1)*0.8 ) ;
    const aboutOnScreen= about.top < about.height*0.2 &&  about.top >= ((about.height * -1)*0.8 ) ;
    const projectsOnScreen=  projects.top < projects.height*0.2 &&  projects.top >= ((projects.height * -1)*0.8 ) ;
    const contactOnScreen=  contact.top < contact.height*0.2 &&  contact.top >= ((contact.height * -1)*0.8 ) ;

         /*contact.top < 0  &&  contact.top >= (contact.height * -1 ) ; */ 

    if(homeOnScreen){

        setIndexHome(true);

    }else{

        setIndexHome(false);

    }
                   
    
    
    if(aboutOnScreen){

        setIndexAbout(true);

    }else{

        setIndexAbout(false);

    }
        
    if(projectsOnScreen){

        setIndexProjects(true);

    }else{

        setIndexProjects(false);

    }
        
  
    if(contactOnScreen){

        setIndexContact(true);

    }else{

        setIndexContact(false);

    }
        

    
 
    }

    useEffect(()=>{

        window.addEventListener('scroll',handleColor);

        return () => {

            window.removeEventListener('scroll',handleColor);
           
          };
    
    
        });



    const handleNavbarPosition=()=>{

        setShowNavbar(!showNavbar)


    }

  
    const handleClickHome=()=>{

    
        props.home.current.scrollIntoView({ behavior: 'smooth' });
        setShowNavbar(!showNavbar)
    
   }

   const handleClickAboutMe=()=>{

    
    props.about.current.scrollIntoView({ behavior: 'smooth' });
    setShowNavbar(!showNavbar)
}
const handleClickProjects=()=>{

    
    props.projects.current.scrollIntoView({ behavior: 'smooth' });
    setShowNavbar(!showNavbar)
}
const handleClickContact=()=>{

    
    props.contact.current.scrollIntoView({ behavior: 'smooth' });
    setShowNavbar(!showNavbar)
}



    return (
        

        <>
        <button id="floatingButton" className= { showNavbar ? "noDisplay" : "" }onClick={handleNavbarPosition} ><span className="material-icons">menu</span></button>
       
        <nav  className= { showNavbar ? 'openNavbar': 'closeNavbar'}>

        <div className= "noDisplay">
        
        <button id="buttonNavbarOpen" onClick={handleNavbarPosition} ><span className="material-icons">arrow_back_ios</span></button>
        </div>
         
         <ul className='ulNavbarResponsive'>

                <li onClick={handleClickHome} className= {indexHome ? 'index' :''} >
                  
                  HOME 
  
               </li>
               
               <li onClick={handleClickAboutMe} className= {indexAbout ? 'index' :''}>
  
                  ABOUT ME
                   
               </li>
                  
               <li onClick={handleClickProjects} className= {indexProjects ? 'index' :''} >
  
                   PROJECTS
                   
               </li>
              
               <li onClick={handleClickContact} className= {indexContact ? 'index' :''}>
  
                   CONTACT
  
               </li>
  
  


         </ul>


     
     
     
     </nav>
        
        

        


    </>
    )
}

export default NavbarMobile
