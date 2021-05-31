import React,{useState} from 'react';
import './Card.scss';
import Corousel from '../Corousel/Corousel'

function Card(props) {

    const [show, setShow] = useState(false);


    const handleCorousel=()=>{
  
      setShow(!show);
      
  
    }
  
   





    return (

        <>
        {show?<Corousel corousel={props.corousel} showCorousel={handleCorousel} ></Corousel> : <></>}
       
            
       

                <figure className='figureCard'>

               
           { props.image===undefined ?
           <a href={props.link} target="_blank" rel="noreferrer" > 
              <div className='videoContainer'> 
                  <video  className='imageVideo' autoPlay loop muted  src={props.video} type="video/mp4"></video> 
              </div>
            </a>

           :<a target="_blank" rel="noreferrer"  href={props.link===''?'':props.link } className={props.link===''? 'disablePointerEvents':''}> 
            <img alt={props.alt} onClick={props.link===undefined ? handleCorousel:null}  className='imageCard' src = {props.image } /> </a>

            
            }
                
                <div className='textContainer'>
                
                  <span>  <strong> {props.title}</strong></span>
               
                   
                     

                    

                        {props.children}
                
                        </div>
                
                
                </figure>



               





           
       
        </>
    )
}

export default Card
