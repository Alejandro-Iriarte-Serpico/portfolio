import React from 'react'
import './Contact.scss';
import './Contact.scss';
import '../../Icons/style.css';
import Qr from '../../images/qr.png';



function Contact (props) {

    
      


       return(
        <section ref={props.contact} className='containerContactSection'>      
       
        
        <div  className="contactSection">
        

            <ul className='ulContact'>

                <li>   <h2>Let's Keep in touch</h2>        </li>
                
                
                <li id='email'>  <span className='icon-mail-dot-ru'></span>   Alejandro27595@hotmail.com          </li>
                <li>  <a href='https://www.linkedin.com/in/alejandro-iriarte-serpico-a62898175/?locale=en_US' > <span className='icon-linkedin'></span>   Linkedin      </a>  </li>
                <li>  <a href='https://github.com/Alejandro-Iriarte-Serpico' >  <span className='icon-github'></span>      Github </a>  </li>
                <li>  <a href='https://www.instagram.com/alediserpico/?hl=es'>  <span className='icon-instagram'></span>    Instagram  </a> </li>


            </ul>
         <figure id='whapQr'> <span className='icon-whatsapp'> </span><img alt="qr" src={Qr}/> </figure>

          
           
            </div>
           
           
           
           
           
           <div className='messageContainer'> 
           
            <h3 className='messageFooter'>"Life is like riding a bicycle. To keep your balance you must keep moving."<cite>Albert Einstein</cite>.</h3>

            </div>
            

        </section>

       )
  

}


export default Contact
