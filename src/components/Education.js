import React, { useState } from "react";
import '../App.css'

// Populates Education section based on language
function Education(props) {
    if ( props.l.eng === true ) {
        return (
            <div className="education sect">
                <h2 className="right-title">Education</h2>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">.NET development</h5>
                        <p className="para">2022 - Present</p>
                    </div>                 
                        <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Lexicon</h5>
                            <p className="para">Crash course in: <br /> - C# .NET <br /> - Web & ASP.NET Core MVC <br /> - Databases <br /> - Azure</p>                                
                        </div>
                    </div>
                </div>
                
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">CS50 + CS50W</h5>
                        <p className="para">2020 - Present</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Harvard University(Edx)</h5>
                            <p className="para">Introduction to Computer Science and Web Development</p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Introduction to programming</h5>
                        <p className="para">2020</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">IT-H??gskolan</h5>
                            <p className="para">Basic Java programming</p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Leadership & Organization</h5>
                        <p className="para">2017 - 2019</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Malm?? University</h5>
                            <p className="para">
                                Bachelor's Degree. Examination paper: <br /> Management-driven Cultural Development? <br /> -A comparative case study of management???s influence on the forming and development of organizational culture in two companies.
                                <br />Grade: VG (highest possible grade: VG)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Product Design</h5>
                        <p className="para">2013 - 2016</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Malm?? University</h5>
                            <p className="para">
                                Included courses such as: <br /> - Design management <br /> - Product-related Electronics <br /> - Materials and Construction Methods <br /> - Design and Sustainability
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )              
    }
    else if (props.l.eng === false) {
        return (
            <div className="education sect">
                <h2 className="right-title">Utbildning</h2>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">.NET-utveckling</h5>
                        <p className="para">2022 - Idag</p>
                    </div>                 
                        <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Lexicon</h5>
                            <p className="para">Intensivkurs i: <br /> - C# .NET <br /> - Web & ASP.NET Core MVC <br /> - Databaser <br /> - Azure</p>                                
                        </div>
                    </div>
                </div>
                
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">CS50 + CS50W</h5>
                        <p className="para">2020 - Idag</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Harvard Universitet (Edx)</h5>
                            <p className="para">Introduktion til Systemvetenskap och Webb-utveckling</p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Introduktion till programmering</h5>
                        <p className="para">2020</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">IT-H??gskolan</h5>
                            <p className="para">Grundl??ggande Java-programmering</p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Ledarskap och Organisation</h5>
                        <p className="para">2017 - 2019</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Malm?? Universitet</h5>
                            <p className="para">
                                Kandidatexamen. Examensarbete: <br /> Ledningsstyrd kulturutveckling? <br /> - En j??mf??rande fallstudie av ledningens inflytande ??ver organisationskulturers utformning och utveckling i tv?? f??retag.
                                <br />Betyg: VG (H??gsta m??jliga betyg: VG)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Produktdesign</h5>
                        <p className="para">2013 - 2016</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Malm?? Universitet</h5>
                            <p className="para">
                                Kurser s?? som: <br /> - Design management <br /> - Produktrelaterad Electronik <br /> - Material och tillverkningsmetoder <br /> - Design och h??llbar utveckling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;