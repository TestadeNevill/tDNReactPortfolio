import React from 'react';
import UserDirectory from '../components/UserDirectory'
import WeatherDashboard from '../components/WeatherDashboard'
import FitnessTracker from '../components/FitnessTracker';

function ShowProjectContainer(props) {

    return (

        <div className="one-second-animation show-project-container" >

            {props.currentlyShowing === "UserDirectory" ?
                <div className="components project-containers" >
                    <UserDirectory />
                </div>
                :
                null
            }

            {props.currentlyShowing === "FitnessTracker" ?
                <div className="components project-containers" >
                    <FitnessTracker />
                </div>
                :
                null
            }

            {props.currentlyShowing === "WeatherDashboard" ?
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