import React from 'react';
import './Projects.css'


const Projects = ({projects}) => (
<div className="projects">
    <h2>P R O J E C T S</h2>
    <div className="FlexContainer">
        <div className="project">
            <a href="https://wherenextbucketlist.herokuapp.com/" target="_blank"><img src="imgs/bucket.jpg" alt="Bucketlist web app screenshot"/></a>
            <h3>Where Next?</h3>
            <p>A web app developed in Python to create bucketlists of spots in a specific city. The user can create new spots/cities, check the spot completed and upload pictures of it.</p>
            <p><strong>Technologies used:</strong> Python, Django, HTML, CSS and AWS.</p>
            <div className="button"><a href="https://github.com/judibo/travel-guide" target="_blank" className="btn">GitHub</a>  <a href="https://wherenextbucketlist.herokuapp.com/" target="_blank" className="btn">Project</a></div>
        </div>
        <div className="project">
            <a href="https://ludogame.herokuapp.com" target="_blank"><img src="imgs/ludo.png" alt="Ludo game web app screenshot"/></a>
            <h3>Ludo</h3>
            <p>A strategy board game for two to four players created using the MERN stack and web sockets, so it can be played online and more than one game at a time.</p>
            <p><strong>Technologies used:</strong> React, NodeJS, Socket.io, MongoDB, Javascript, HTML, CSS and JWT.</p>
            <div className="button"><a href="https://github.com/judibo/ludo-game" target="_blank" className="btn">GitHub</a>  <a href="https://ludogame.herokuapp.com" target="_blank" className="btn">Project</a></div>
        </div>
        <div className="project">
            <a href="https://cosmic-zodiac.herokuapp.com" target="_blank"><img src="imgs/cosmic.jpg" alt="Horoscope web app screenshot"/></a>
            <h3>Cosmic</h3>
            <p>A MEN stack CRUD app written to consume 3rd party API where the user can check the horoscope and keep track of its accuracy. Inside the team, I had the role of front-end developer, helping style and design the layout of this web app.</p>
            <p><strong>Technologies used:</strong> NodeJS, Express, API, HTML, CSS.</p>
            <div className="button"><a href="https://github.com/judibo/cosmic" target="_blank" className="btn">GitHub</a>  <a href="https://cosmic-zodiac.herokuapp.com" target="_blank" className="btn">Project</a></div>
        </div>
        <div className="project">
            <a href="https://judibo.github.io/connect-four/" target="_blank"><img src="imgs/connectfour.png" alt="Connect Four game screenshot"/></a>
            <h3>Connect Four</h3>
            <p>Game created using front-end tools with concise code.</p>
            <p><strong>Technologies used:</strong> HTML, CSS and Javascript.</p>
            <div className="button"><a href="https://github.com/judibo/connect-four" target="_blank" className="btn">GitHub</a>  <a href="https://judibo.github.io/connect-four/" target="_blank" className="btn">Project</a></div>
        </div>

        <div className="project">
            <img className="myImages" id="myImg" src="imgs/monte-carlo-joias.jpg" alt="Monte Carlo Joias website design"/>
            <h3>Web Site Layout</h3>
            <p>Design of the e-commerce website for Monte Carlo Joias</p>
            <p><strong>Technologies used:</strong> Photoshop.</p>
            <div className="button"><a href="https://www.montecarlo.com.br" target="_blank" className="btn">Go to website</a></div>
        </div>
        <div className="project">
            <img className="myImages" id="myImg"  src="imgs/monte-carlo-joias-natal.jpg" alt="Monte Carlo Joias Holidays website"/>
            <h3>Holiday Special</h3>
            <p>Special site for the 2016 Christmas Holiday at Monte Carlo Joias.</p>
            <p><strong>Technologies used:</strong> Photoshop.</p>
            <div className="button"><a href="https://www.montecarlo.com.br/celebrar" target="_blank" className="btn">Go to website</a></div>
        </div>
        <div className="project">
            <img className="myImages" id="myImg" src="imgs/sephora-Formula-X-main.png" alt="Sephora virtual manicure"/>
            <h3>Virtual Manicure</h3>
            <p>Landing page to see the nail polish colors applied on the nails at Sephora website.</p>
            <p><strong>Technologies used:</strong> Photoshop, HTML, CSS and Javascript</p>
        </div>
        <div className="project">
            <img className="myImages" id="myImg"  src="imgs/brushes-main.png" alt="Sephora make up brush guide"/>
            <h3>Brushes Guide</h3>
            <p>A special guide to make it easy to find the type of brush the user needed for her make-up on Sephora website.</p>
            <p><strong>Technologies used:</strong> Photoshop, HTML and CSS.</p>
        </div>




    </div>
</div>
)

export default Projects;