import React from 'react'
import Card from '../Cards/Card'
import './Projects.scss';
import image from '../../images/projectFigma/Inicio.png';
import video from '../../videos/videoProyecto.mp4';
import Certification6 from '../../images/Certifications/Specialization Certificate.png';



/**Images Corousel Design project*/
import ImageActities from '../../images/projectFigma/Actividades.png'
import ImageSpecificWorkingArea from '../../images/projectFigma/Area de trabajo especifica.png'
import ImageWorkingArea from '../../images/projectFigma/Area de Trabajo.png'
import ImageMockup1 from '../../images/projectFigma/borrador 1.png'
import ImageMockup2 from '../../images/projectFigma/borrador1.2.png'
import ImageCreateEmployee from '../../images/projectFigma/Crear nuevo empleado.png'
import ImageCreateProject from '../../images/projectFigma/Crear Proyecto.png'
import ImageEditEmployee from '../../images/projectFigma/Editar empleado.png'
import ImageAsessing from '../../images/projectFigma/Evaluacion.png'
import ImageHomeAdm from '../../images/projectFigma/Inicio Adm.png'
import ImageHome from '../../images/projectFigma/Inicio.png'
import ImageAchivements from '../../images/projectFigma/Logros.png'
import ImageNavbar from '../../images/projectFigma/nav bar.png'
import ImageLogin from '../../images/projectFigma/Pagina de Login.png'
import ImageProfile from '../../images/projectFigma/Perfil.png'
import ImageMockup3 from '../../images/projectFigma/mockup3.jpg'
import ImageMockup4 from '../../images/projectFigma/mockup4.jpg'
import ImageMockup5 from '../../images/projectFigma/Mockup5.jpg'
import ImagePlanification from '../../images/projectFigma/Planificacion.png'
import ImageStatistics from '../../images/projectFigma/Seccion Estadisticas.png'


/**Images Corousel Product management project*/

import Image1 from '../../images/ProductManagementProject/_Iteration Burndown .png'
import Image2 from '../../images/ProductManagementProject/Bodleian-Project---Given-Requirements-1.png'
import Image3 from '../../images/ProductManagementProject/Bodleian-Project---Given-Requirements-2.png'
import Image4 from '../../images/ProductManagementProject/CPM CHART-1.png'
import Image5 from '../../images/ProductManagementProject/Proposed-Release-Plan-1.png'
import Image6 from '../../images/ProductManagementProject/Proposed-Release-Plan-2.png'
import Image7 from '../../images/ProductManagementProject/Proposed-Release-Plan-3.png'
import Image8 from '../../images/ProductManagementProject/Release Plan-1.png'
import Image9 from '../../images/ProductManagementProject/Release Plan-2.png'
import Image10 from '../../images/ProductManagementProject/Release-Plan-User-Stories-V2-1.png'
import Image11 from '../../images/ProductManagementProject/Sprint-1---Task-Breakdown-1.png'
import Image12 from '../../images/ProductManagementProject/Week 3 - Iteration Plan - Sheet1-1.png'
import Image13 from '../../images/ProductManagementProject/Week 3 - Iteration Plan - Sheet1-2.png'
import Image14 from '../../images/ProductManagementProject/Wireframe-1.png'
import Image15 from '../../images/ProductManagementProject/Wireframe2.png'
import Image16 from '../../images/ProductManagementProject/Work Breakdown Structure-1.png'


/**Image stanHome project*/

import ImageStanHome from '../../images/stanHome.jpg'

/**Setting all images to an array*/

const ImagesDesign=[ImageActities,ImageSpecificWorkingArea,ImageWorkingArea,
    ImageMockup1,ImageMockup2,ImageCreateEmployee,ImageCreateProject,ImageEditEmployee,
    ImageAsessing,ImageHomeAdm,ImageHome,ImageAchivements,ImageNavbar,ImageLogin,ImageProfile,
    ImageMockup3,ImageMockup4,ImageMockup5,ImagePlanification,ImageStatistics];

const ImagesManagement=[Image1,Image2,Image3,Image4,Image5,Image6,
                            Image7,Image8,Image9,Image10,Image11,Image12,
                            Image13,Image14,Image15,Image16];
    








function Projects(props) {
    return (
        <>
         
       <section ref={props.projects} className='sectionProjects'>  
      
      
        <h1 className='projectsTitle'>PROJECTS</h1>

            <div className='projectsContainer'>

        <Card image={Certification6} title="Product Management Project" alt='logIn'  corousel={ImagesManagement}> 
                        
                    <strong> COMPANY: Inukshuk books</strong><br></br><br></br>   

                    <strong> OBJECTIVE:</strong><br></br>

                    As a library, Inukshuk books wants to promote the literacy in 
                    children all around the world through a mobile app, so the reading process 
                    can be interactive and joyful for them.<br></br>   <br></br>   

                    <strong> GOALS ACHIEVED:</strong><br></br>                                      
                    
                    
                    •Leading development strategy for one or more education software products.<br></br>
                    •Representing customer and company requirements to guide the development of relevant products.<br></br>
                    •Interacting with internal and external product stakeholders to develop requirements.<br></br>
                    •Creating, presenting and defending business cases for new products.<br></br>
                    •Creating plans for product development.<br></br>
                    •Creating phased release and iteration (sprint) plans for product development (using Agile/Scrum Methodologies).<br></br>
                    •Leading cross-functional product development teams to ensure that development of new products is on target with customers requirements.<br></br>
                    •Creating product risk plans.     <br></br>     <br></br>     

                   

                          <strong> TECHNOLOGIES & TECHNIQUES:</strong><br></br>     

                          •SCRUM and AGILE methodologies <br></br>    
                          •TRELLO  <br></br>  
                          •JIRA <br></br>  
                          •EXCEL <br></br>  
                          •FIGMA <br></br> 
                          •Google Docs <br></br>  
                         



                                             
                         </Card>     

                         <Card image={ImageStanHome} title="Ecommerce Website Development" alt='Website' link='https://www.stanhome.es/'> 
                        

                        <strong> COMPANY: STANHOME</strong><br></br><br></br>

                        <strong> OBJECTIVE:</strong><br></br>
                        As a whole seller in cleaning products, StanHome was looking to have an online presence so their 
                        customers could get their products on internet, the target was to sell products across the
                         whole country through a web page. <br></br><br></br>
                      
                        <strong> GOALS ACHIEVED:</strong><br></br>
                       
                                • Definition of customer needs.<br></br>
                                • Gathering of information necessary for the development of the website (online store).<br></br>
                                • Establishment of objectives for each department involved (Marketing, sales, Finance, Logistics).<br></br>
                                • Defining the scope and limitations of the project.<br></br>
                                • Construction of the layout and design of the website.<br></br>
                                • Development of a web page taking into account its integration and compatibility with the company's old systems.<br></br><br></br>
                                                                 
                        <strong> TECHNOLOGIES:</strong><br></br>   
                        TECHNOLOGIES:
                        •.NET<br></br>
                        • HTML5<br></br>
                        • CSS3<br></br>
                        • JavaScript<br></br>
                        • Microsoft SQL Server<br></br>
                        • LINQ<br></br>
                        • C#<br></br>
                        • Bootstrap<br></br>
                        • ASP.NET MVC<br></br>
                        • Razor<br></br>





                       



                         </Card> 
                        <Card image={image} title="Website Design FIGMA (Management Web Page)" alt='Website design FIGMA' corousel={ImagesDesign}> 
                        

                        <strong> COMPANY: PRISMA </strong><br></br><br></br>   

                        <strong> OBJECTIVE:</strong><br></br>
                        
                        As a Digital Agency, PRISMA wants to implement a management software that tracks all the different projects that are built                         in the company, this management tool will aim 
                        to make the devolepment process more neat, clean, transparent, productive and largely controlled by the executives.<br></br><br></br>   

                        <strong> GOALS ACHIEVED:</strong><br></br>
                        •Definition of customer wants and needs.<br></br>
                        •Gathering of requirements.<br></br>
                        •Establishment of managerial metrics and parameters to be measured.<br></br>
                        •Building mockups.<br></br>
                        •Defining aesthetics details (color, font size, elements distribution).<br></br>
                        •Defining the scope and limitations of the project.<br></br>
                        •Build the final design of the website.  <br></br>     <br></br>   
                                           
                        <strong> TECHNOLOGIES:</strong><br></br>   

                            •Figma


                         </Card>      


                         <Card video={video} title="Tourism web page built in REACT" link='https://pedantic-bhaskara-40219e.netlify.app/'> 
                        
                         <strong> DESCRIPTION:</strong> Tourism web page (personal project)<br></br><br></br>
                    •A good looking Header with an autoplay video in the background and stylish title.<br></br>
                    •A Main section with different places to visit that are displayed on informative cards.<br></br>
                    •An elegant Footer with all the information related to the company and contact means.<br></br><br></br>   
                    
                   
                    <strong> TECHNOLOGIES:</strong><br></br>
                    •REACT<br></br>
                    •SASS<br></br>
                    •HTML<br></br>
                    •CSS<br></br>
                    •JavaScript<br></br>                       
                    •Flexbox<br></br>
                    •Bootstrap<br></br>
                  
                    
                    
                    
                    </Card> 


                       

                  
                       
              
            </div>


                       
            
                     
                     

                   
                                           
                                            






                       </section>

                       </>
    )
}

export default Projects;
