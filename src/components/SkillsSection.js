import React, { useState } from "react";
import '../App.css'

// Populates Skill Section based on language
function SkillSection(props) {
    if ( props.l.eng === true ){
        return (
            <div className="skills-section">
                <div class="technologies">
                    <h3 className="main-title">Skills</h3>
                    <ul className="skills-left">
                        <li>
                            <p className="skill-title">C#</p>
                        </li>
                        <li>
                            <p className="skill-title">JavaScript</p>
                        </li>
                        <li>
                            <p className="skill-title">HTML/CSS</p>
                        </li>
                        <li>
                            <p className="skill-title">Python</p>
                        </li>
                        <li>
                            <p className="skill-title">Java</p>
                        </li>
                        <li>
                            <p className="skill-title">C</p>
                        </li>
                        <li>
                            <p className="skill-title">SQL</p>
                        </li>
                    </ul>
                    <ul className="skills-right">
                        <li>
                            <p className="skill-title">.NET</p>
                        </li>
                        <li>
                            <p className="skill-title">React</p>
                        </li>
                        <li>
                            <p className="skill-title">Django</p>
                        </li>
                        <li>
                            <p className="skill-title">Flask</p>
                        </li>
                        <li>
                            <p className="skill-title">Photoshop</p>
                        </li>
                        <li>
                            <p className="skill-title">Illustrator</p>
                        </li>
                        <li>
                            <p className="skill-title">Indesign</p>
                        </li>
                    </ul>
                </div>                
                <div className="projects">
                    <h3 className="main-title">Projects</h3>
                    <div class="project-container">
                        <a href="https://github.com/psagemo/RestaurantWebApp" className="tl-title project-title">Restaurant Web App <i className="fa fa-github"></i></a>
                        <p className="project-description">
                            Web App for the fictional Restaurant Ribeira built using ASP.NET MVC Identity and uses role-based authorization to separate the admin user from the customers. The site features customizeable menu and table reservations with admin oversight and CRUD access.
                        </p>
                    </div>
                    <div class="project-container">
                        <a href="https://github.com/psagemo/AssetTracking2" className="tl-title project-title">Asset Tracker <i className="fa fa-github"></i></a>
                        <p className="project-description">
                            Console App built using C# for keeping track of company assets (mobile phones and laptops) which grants the user CRUD access over assets and alerts when assets need to be replaced. 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    else if ( props.l.eng === false ){
        return (
            <div className="skills-section">
                <div class="technologies">
                    <h3 className="main-title">F??rdigheter</h3>
                    <ul className="skills-left">
                        <li>
                            <p className="skill-title">C#</p>
                        </li>
                        <li>
                            <p className="skill-title">JavaScript</p>
                        </li>
                        <li>
                            <p className="skill-title">HTML/CSS</p>
                        </li>
                        <li>
                            <p className="skill-title">Python</p>
                        </li>
                        <li>
                            <p className="skill-title">Java</p>
                        </li>
                        <li>
                            <p className="skill-title">C</p>
                        </li>
                        <li>
                            <p className="skill-title">SQL</p>
                        </li>
                    </ul>
                    <ul className="skills-right">
                        <li>
                            <p className="skill-title">.NET</p>
                        </li>
                        <li>
                            <p className="skill-title">React</p>
                        </li>
                        <li>
                            <p className="skill-title">Django</p>
                        </li>
                        <li>
                            <p className="skill-title">Flask</p>
                        </li>
                        <li>
                            <p className="skill-title">Photoshop</p>
                        </li>
                        <li>
                            <p className="skill-title">Illustrator</p>
                        </li>
                        <li>
                            <p className="skill-title">Indesign</p>
                        </li>
                    </ul>
                </div>                
                <div className="projects">
                    <h3 className="main-title">Projekt</h3>
                    <div class="project-container">                    
                        <a href="https://github.com/psagemo/RestaurantWebApp" className="tl-title project-title">Restaurant Web App <i className="fa fa-github"></i></a>                                      
                        <p className="project-description">
                            Web App f??r den fiktiva Restaurang Ribeira byggd med ASP.NET MVC Identity och anv??nder rollbaserad auktorisering f??r att separera admin fr??n kunderna. Sidan erbjuder en ??ndringsbar menu och bordsbokning med ??versikt och CRUD-tillg??ng f??r admin.
                        </p>
                    </div>
                    <div class="project-container">
                        <a href="https://github.com/psagemo/AssetTracking2" className="tl-title project-title">Asset Tracker <i className="fa fa-github"></i></a>
                        <p className="project-description">
                            Konsol-app byggd i C# f??r att h??lla reda p?? f??retagstillg??ngar (mobiltelefoner och laptops) som ger anv??ndaren CRUD-tillg??ng ??ver tillg??ngarna och meddelar n??r till??ngar b??r bytas ut.                            
                        </p>
                    </div>
                </div>                
            </div>
        )
    }
}


export default SkillSection;