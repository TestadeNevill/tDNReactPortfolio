import React from 'react';
import BridgeMap from '../components/BridgeMap'
import GoogleBookSearchApp from '../components/GoogleBookSearchApp'
import FitnessTracker from '../components/FitnessTracker';

function ShowProjectContainer(props) {

    return (

        <div className="one-second-animation show-project-container" >

            {props.currentlyShowing === "BridgeMap" ?
                <div className="components project-containers" >
                    <BridgeMap />
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

            {props.currentlyShowing === "GoogleBookSearchApp" ?
                <div className="components project-containers" >
                    <GoogleBookSearchApp />
                </div>
                :
                null
            }

        </div>

    );

}

export default ShowProjectContainer;