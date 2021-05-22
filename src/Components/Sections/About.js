import React from 'react'
import imageMe from '../../images/me2.png';
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

            <p className='figureCaption'> "I am confident in my ability to come up with interesting ideas that contribute in the making 
            of great software products that can have a major impact on peoples' lives."             </p>


            </figure>



    <div className='skillsContainer'>

        <div className="programmingContainer">
    
            <h3>PROGRAMMING</h3>    
            
                        <ul className='programmingList'>

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

       
<div className='manageDesignContainer'>

        <div className=" managementContainer">
              <h3>MANAGEMENT</h3>  
        
                <ul className='managementList'>
                    
                    <li><span className='icon-jira'></span>Jira</li>
                    <li><span className='icon-trello'></span>Trello</li>
                    <li><img alt="scrum logo" src={ImageScrum} style={{height: "25px", width:"25px"}}></img>Scrum </li>
                    <li><span className='icon-microsoftexcel'></span>Excel</li>
                    <li><span className='icon-google'></span>Google Docs</li>
                    
                </ul>
                <div className='shadow'></div>
        </div>

       <div className='designContainer'>        
             
       <h3 >DESIGN</h3> 

                <ul className='designList'>

                    <li><span className='icon-figma'></span>Figma</li>
                    <li><span className='icon-adobephotoshop'></span>Photoshop</li>
                    <li><span className='icon-adobedreamweaver'></span>Dreamweaver</li>
                    
                

                 </ul>
                 <div className='shadow'></div>
        </div>
 

        </div>


    </div>
</div>

        

       





        </section>
        
        )


}

export default About
