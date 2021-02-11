import React from 'react';
import github from '../media/github-icon (1).svg'

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

            <div className="project-divs" id="BridgeMap" onClick={handleGetName} >
                <h2 className="project-div-headers" id="BridgeMap" >BridgeMap</h2>
                <p className="project-blurb" id="BridgeMap" >BridgeMap is designed generate a user friendly list from an api. Using React and MongoDB I was able to load each user into a resuable component neatly displaying the content. Click in the search bar to filter results by name and column.</p>
                {/* <img src={require("../media/BridgeMap.png")} alt='' className="project-screenshots" id="BridgeMap" /> */}
            </div>

            <div className="project-divs" id="FitnessTracker" onClick={handleGetName} >
                <h2 className="project-div-headers" id="FitnessTracker" >Fitness Tracker</h2>
                <p className="project-blurb" id="FitnessTracker" >View, create and track daily workouts. Log multiple exercises in a workout on a given day. Track the name, type, weight, sets, reps, and duration of exercise. Track distance traveled of cardio exercises. </p>
                {/* <img src={require("../media/fitnesstracker.png")} alt='' className="project-screenshots" id="FitnessTracker" /> */}
            </div>

            <div className="project-divs" id="GoogleBookSearchApp" onClick={handleGetName} >
                <h2 className="project-div-headers" id="GoogleBookSearchApp" >Google Book Search App</h2>
                <p className="project-blurb" id="GoogleBookSearchApp" >Google Book Search App allows the user to query and display books based on inputed searches. With React, Node, Express and MongoDB users can save books to review or purchase later.</p>
                {/* <img src={require("../media/GoogleBookSearchApp.png")} alt='' className="project-screenshots" id="GoogleBookSearchApp" /> */}
            </div>

            <div className="project-divs">
                <h2 className="project-div-headers">See more on GitHub</h2>
                <a href="https://github.com/TestadeNevill" rel="noopener noreferrer" target="_blank" >
                    <img src={github} alt='' className="icons" id="project-github-icon" />
                </a>
            </div>

        </div>

    );

}

export default Project;