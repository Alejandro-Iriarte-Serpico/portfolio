import React from 'react'
import Certification1 from '../../images/Certifications/Agile Planning for Software Products.png';
import Certification2 from '../../images/Certifications/Client Needs and Software Requirements.png';
import Certification4 from '../../images/Certifications/Reviews & Metrics for Software Improvements.png';
import Certification5 from '../../images/Certifications/Software Processes and Agile Practices.png';
import imageMe from '../../images/meStairs.png';

import './About.scss';
import '../../Icons/style.css';
import ImageScrum from '../../Icons/Scrum.png';


function About(props) {


    return (
        
        <section ref={props.about} className='sectionAboutMe' >
        <h1 className='AboutMeTitle'>ABOUT ME</h1>
        <div className='figureSkillsContainer'>

            <figure  className='figure'>

            <img  alt='person in a desk' className='figureImageAbout' src={imageMe} />   

            <p className='figureCaption'> "My technical background in programming and design makes me a great asset for leading cross functional teams, 
            I am confident in my ability to manage and contribute in the making of great software products that can have a major impact on peoples' lives."           </p>


            </figure>

            <div className='skillsContainer productSkillsContainer'>

          
          
            <h1>As a Product Manager I use Agile Methodologies </h1>
                         <h2> SOFTWARE PROCESSES AND AGILE PRACTICES</h2>
                     
                         <ul>
                    
                         <h3> <strong> Process Model </strong></h3>
                                
                                <li>  	Unified Process Model</li>
                                <h3><strong>   Agile Practices</strong></h3>
                                <li> 	12 Principles of Agile</li>
                                <li>  	Scrum</li>
                                <li>  	Definition of “Done”</li>
                                
                                <li>  	Kanban</li>
                                <div className='shadow'></div>
                         </ul>
                       
                       
                      <a href="https://www.coursera.org/account/accomplishments/certificate/656LV85ACH9W" target="_blank" rel="noreferrer" >  <img  alt='Certification5' className='' src={Certification5} />   </a> 


            </div>


            <div className='skillsContainer productSkillsContainer'>

          
            <h2> CLIENT NEEDS AND SOFTWARE REQUIREMENTS</h2>

           
                                        
                                        
                    <ul>
                    <h3><strong> Agile Requirements</strong></h3>   
                       
                           <li>    User Stories </li>
                           <li>    Acceptance Tests</li>
                           <li>  Product Backlog</li>
                           <li>  Use Cases</li>
                           <li>  Story Maps</li>
                           <li> Wireframes</li>
                           <li> Storyboards</li>
                           <div className='shadow'></div>

                    </ul>

                    <a href="https://www.coursera.org/account/accomplishments/certificate/EFWRGMVUJXAC" target="_blank" rel="noreferrer" >  <img  alt='Certification2' className='' src={Certification2} />   </a> 

            </div>
            <div className='skillsContainer productSkillsContainer'>

          
          
            <h2>  AGILE PLANNING FOR SOFTWARE PRODUCTS </h2>
        
                                
                                        
<ul>
            <h3><strong> Iteration Plans</strong></h3>             
             <li>   Daily Stand-ups </li>               
             <li>   Work Breakdown Structure (WBS)</li>              
             <li>   Velocity-Driven Development</li>              
             <li>   Time Boxing</li>              
             <li>   Gantt Charts</li>              
             <li>   Time Estimates</li>              
             <li>   Critical Path Method (CPM) Charts</li>               
             <li>   Impact vs. Likelihood Matrix</li>              
             <li>   Risk Strategies, Contingency, Mitigation</li>

             <div className='shadow'></div>

</ul>

<a href="https://www.coursera.org/account/accomplishments/certificate/NTNKW3TKAG9G" target="_blank" rel="noreferrer" >  <img  alt='Certification1' className='' src={Certification1} />   </a> 

</div>

<div className='skillsContainer productSkillsContainer'>

          
          
<h2>  REVIEWS AND METRICS FOR SOFTWARE IMPROVEMENTS </h2>
          
                                 
                                        
<ul>

        <h3><strong>Retrospective</strong></h3>                
          <li> Sprint Review Meeting</li>
          <li> Software Technical Review</li>
          <li> Requirements Inspection</li>
          <li>Release Burndown</li>

          <div className='shadow'></div>

</ul>

<a href="https://www.coursera.org/account/accomplishments/certificate/9FEJHX6CZ2QB" target="_blank" rel="noreferrer" >  <img  alt='Certification4' className='' src={Certification4} />   </a> 

</div>
    <div className=' hardSkills'>
    <h1>My hard skills </h1>
       

       
<div className='hardSkillsContainer'>

       
              <h3> <strong> MANAGEMENT</strong></h3>  
        
                <ul className='lists'>
                    
                    <li><span className='icon-jira'></span>Jira</li>
                    <li><span className='icon-trello'></span>Trello</li>
                    <li><img alt="scrum logo" src={ImageScrum} style={{height: "25px", width:"25px"}}></img>Scrum </li>
                    <li><span className='icon-microsoftexcel'></span>Excel</li>
                    <li><span className='icon-google'></span>Google Docs</li>
                    
                </ul>
                <div className='shadow'></div>
      

       
        </div>



        <div className='hardSkillsContainer'>

      
             
             <h3 > <strong> DESIGN</strong></h3> 
      
                      <ul className='lists'>
      
                          <li><span className='icon-figma'></span>Figma</li>
                          <li><span className='icon-adobephotoshop'></span>Photoshop</li>
                          <li><span className='icon-adobedreamweaver'></span>Dreamweaver</li>
                          
                      
      
                       </ul>
                       <div className='shadow'></div>
           


              </div>












                            
                                    <div className="hardSkillsContainer">
                                
                                <h3><strong>PROGRAMMING</strong></h3>    
                                
                                            <ul className='lists'>

                                                    <li><span className='icon-csharp'></span> C#</li>
                                                    <li><span className='icon-html5'></span> HTML 5</li>
                                                    <li><span className='icon-css3'></span> CSS 3</li>
                                                    <li><span className='icon-javascript'></span> JavaScript</li>
                                                    <li><span className='icon-database'></span> Microsoft SQL Server</li>
                                                    <li><span className='icon-bootstrap'></span> Bootstrap</li>
                                                    <li><span className='icon-microsoft'></span> ASP.NET MVC</li>
                                                    <li><span className='icon-microsoft'></span> Razor</li>
                                                    <li><span className='icon-microsoft'></span> LINQ</li>
                                                    <li><span className='icon-mysql'></span> PhpMyAdmin</li>
                                                    <li><span className='icon-sass'></span> SASS</li>
                                                    <li><span className='icon-react'></span> REACT</li>
                                                    <li><span className='icon-github'></span> Git-Github</li>


                                            </ul>
                                            <div className='shadow'></div>
                                        
                            </div>
       


    </div>
</div>

        

       





        </section>
        
        )


}

export default About
