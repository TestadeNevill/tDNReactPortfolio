
import React from 'react';
import { Link } from 'react-router-dom'

function Home() {

    return (

        <div id="home-div">
            <p className="p one-second-animation" id="hi-there" >Hi there! I'm</p>
            <h1 className="h1 three-second-animation" >Datesta Nickle </h1>
            {/* <h1 className="h2 three-second-animation" >Testa de Nevill</h1> */}
            <h2 className="h2 five-second-animation" >I'm a Full Stack Web Developer</h2>
            <Link to='/resume' exact className="p seven-second-animation" id="intro" >
                <p className="p seven-second-animation" id="intro" >I have experience in Github, GitBash, Sourcetree, HTML5, CSS3, Bootstrap, JavaScript, JQuery, JSON, AJAX,
API’s, Node.js, Handlebars.js Express, MySQL, Sequelize, MongoDB, Mongoose and React.js.</p>
            </Link>
            <p className="nine-second-animation">This website was created using React.js and CSS.</p>
            <a href={`mailto:dnickle.cet@gmail.com`} className="ten-second-animation" >
                <button className="buttons" id="get-in-touch" >Lets talk</button>
            </a>
        </div>

    );

}

export default Home;