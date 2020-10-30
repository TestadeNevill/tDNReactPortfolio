import React from 'react';

function Project(props) {

    const handleGetName = (event) => {
        let projectName = event.target.id
        handleChangeCurrentlyShowing(projectName)
    }

    const handleChangeCurrentlyShowing = (projectName) => {
        props.handleChangeCurrentlyShowing(projectName)
    }

    return (

        <div className="components" id="projects-grid">

            <div className="project-divs" id="UserDirectory" onClick={handleGetName} >
                <h2 className="project-div-headers" id="UserDirectory" >User Directory</h2>
                <p className="project-blurb" id="UserDirectory" >User Directory is a React and Redux Application, with a Rails backend which allows users to create a personalised schedule with the aim of helping them to better balance their work and home life.</p>
                {/* <img src={require("../media/userdirectory.png")} alt='' className="project-screenshots" id="UserDirectory" /> */}
            </div>

            <div className="project-divs" id="FitnessTracker" onClick={handleGetName} >
                <h2 className="project-div-headers" id="FitnessTracker" >Fitness Tracker</h2>
                <p className="project-blurb" id="FitnessTracker" >Fitness Tracker is a game application created using a Rails backend and React frontend, in combination with the Phaser 3 game engine. The aim of the game is to collect as many pieces of fruit as possible. </p>
                {/* <img src={require("../media/fitnesstracker.png")} alt='' className="project-screenshots" id="FitnessTracker" /> */}
            </div>

            <div className="project-divs" id="WeatherDashboard" onClick={handleGetName} >
                <h2 className="project-div-headers" id="WeatherDashboard" >Weather Dashboard</h2>
                <p className="project-blurb" id="WeatherDashboard" >WeatherDashboard is a JavaScript Single Page Application, with a Rails backend which allows users to browse a range of beautiful artworks from the Metropolitan Museum of Art, and to add comments and likes to their favorite pieces.</p>
                {/* <img src={require("../media/weatherdashboard.png")} alt='' className="project-screenshots" id="WeatherDashboard" /> */}
            </div>

            <div className="project-divs">
                <h2 className="project-div-headers">See more on GitHub</h2>
                <a href="https://github.com/TestadeNevill" rel="noopener noreferrer" target="_blank" >
                    <img src={require("../media/github-icon.svg")} alt='' className="icons" id="project-github-icon" />
                </a>
            </div>

        </div>

    );

}

export default Project;