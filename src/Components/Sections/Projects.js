import React from 'react'
import Card from '../Cards/Card'
import './Projects.scss';
import image from '../../images/projectFigma/Inicio.png';
import imageWorking from '../../images/working.jpg';
import video from '../../videos/videoProyecto.mp4';

function Projects(props) {
    return (
        <>
         
       <section ref={props.projects} className='sectionProjects'>  
      
      
        <h1 className='projectsTitle'>PROJECTS</h1>

            <div className='projectsContainer'>

                        <Card image={image} title="Website design FIGMA (Management Web Page)" alt='Website design FIGMA'> 
                        
                        •Definition of customer wants and needs.<br></br>
                        •Gathering of requirements.<br></br>
                        •Establishment of managerial metrics and parameters to be measured.<br></br>
                        •Building mockups.<br></br>
                        •Defining aesthetics details (color, font size, elements distribution).<br></br>
                        •Defining the scope and limitations of the project.<br></br>
                        •Designing the final design of the website (using figma as tool).           
                                           
                                             
                         </Card>      




                        <Card video={video} title="Tourism web page built in REACT" link='https://pedantic-bhaskara-40219e.netlify.app/'> 
                        
                            Tourism web page, built from scratch, with different sections:<br></br>
                        •A good looking Header with an autoplay video in the background and stylish title.<br></br>
                        •A Main section with different places to visit that are displayed on informative cards.<br></br>
                        •An elegant Footer with all the information related to the company and contact means.<br></br>
                        
                       
                            Usage of top development technologies such as:<br></br>
                        •REACT<br></br>
                        •SASS<br></br>
                        •HTML<br></br>
                        •CSS<br></br>
                        •JavaScript<br></br>                       
                        •Flexbox<br></br>
                        •Bootstrap<br></br>
                      
                        
                        
                        
                        </Card> 

                        <Card image={imageWorking} title="Not available yet :(" alt='logIn' link=''> 
                        
                        Work in progress . . .       
                                           
                                             
                         </Card>      

                       
              
            </div>


                       
            
                     
                     

                   
                                           
                                            






                       </section>

                       </>
    )
}

export default Projects;
