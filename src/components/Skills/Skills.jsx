import React from 'react';
import './Skills.css'

const Skills = (props) => (

    <section id="skills">
        <h2>S K I L L S</h2>
        <div  className="FlexContainer">
            <div className="skills-icons">
                <img src="imgs/html.png" alt="HTML"/>
                <h4>HTML</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/css.png" alt="CSS"/>
                <h4>CSS</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/javascript.png" alt="Javascript"/>
                <h4>Javascript</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/python.png" alt="Python"/>
                <h4>Python</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/node.png" alt="Node"/>
                <h4>Node.js</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/react.png" alt="React"/>
                <h4>React.js</h4>
            </div>
        </div>
        <div  className="FlexContainer">
            <div className="skills-icons">
                <img src="imgs/socket.png" alt="Socket.IO"/>
                <h4>Socket.IO</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/mongodb.png" alt="MongoDB"/>
                <h4>MongoDB</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/postgresql.png" alt="PostgreSQL"/>
                <h4>PostgreSQL</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/aws.png" alt="AWS"/>
                <h4>AWS</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/photoshop.png" alt="Adobe Photoshop"/>
                <h4>Photoshop</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/illustrator.png" alt="Adobe Illustrator"/>
                <h4>Illustrator</h4>
            </div>
            <div className="skills-icons">
                <img src="imgs/indesign.png" alt="Adobe InDesign"/>
                <h4>InDesign</h4>
            </div>
        </div>
    </section>
)

export default Skills;