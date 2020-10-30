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
                <p className="project-blurb" id="UserDirectory" >User Directory is designed generate a user friendly list from an api. Using React and MongoDB I was able to load each user into a resuable component.</p>
                {/* <img src={require("../media/userdirectory.png")} alt='' className="project-screenshots" id="UserDirectory" /> */}
            </div>

            <div className="project-divs" id="FitnessTracker" onClick={handleGetName} >
                <h2 className="project-div-headers" id="FitnessTracker" >Fitness Tracker</h2>
                <p className="project-blurb" id="FitnessTracker" >Fitness Tracker tracks a users workout regime and calculates total weight and time displayed in stats. </p>
                {/* <img src={require("../media/fitnesstracker.png")} alt='' className="project-screenshots" id="FitnessTracker" /> */}
            </div>

            <div className="project-divs" id="WeatherDashboard" onClick={handleGetName} >
                <h2 className="project-div-headers" id="WeatherDashboard" >Weather Dashboard</h2>
                <p className="project-blurb" id="WeatherDashboard" >Weather Dashboard is a JavaScript single page application, that uses a weather api to populate current and forecasted weather based on the input of a city name.</p>
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