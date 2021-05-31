import React,{useState,useEffect} from 'react'
import './NavbarMobile.scss'


function NavbarMobile(props) {
    
/********************************/    

/*Sets the initial value to the mobile navbar  */ 

/********************************/    
    
    const [showNavbar, setShowNavbar] = useState(false);
    





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

                <li onClick={handleClickHome}   >
                  
                  HOME 
  
               </li>
               
               <li onClick={handleClickAboutMe}>
  
                  ABOUT ME
                   
               </li>
                  
               <li onClick={handleClickProjects} >
  
                   PROJECTS
                   
               </li>
              
               <li onClick={handleClickContact} >
  
                   CONTACT
  
               </li>
  
  


         </ul>


     
     
     
     </nav>
        
        

        


    </>
    )
}

export default NavbarMobile
