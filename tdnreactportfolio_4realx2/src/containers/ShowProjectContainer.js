import React from 'react';
import UserDirectory from '../components/UserDirectory'
import FruitQuest from '../components/FitnessTracker'
import WeatherDashboard from '../components/WeatherDashboard'

function ShowProjectContainer(props) {

    return (

        <div className="one-second-animation show-project-container" >

            {props.currentlyShowing === "AlwaysBalanced" ?
                <div className="components project-containers" >
                    <UserDirectory />
                </div>
                :
                null
            }

            {props.currentlyShowing === "FruitQuest" ?
                <div className="components project-containers" >
                    <FruitQuest />
                </div>
                :
                null
            }

            {props.currentlyShowing === "Gandr" ?
                <div className="components project-containers" >
                    <WeatherDashboard />
                </div>
                :
                null
            }

        </div>

    );

}

export default ShowProjectContainer;