import React from 'react';
// import ReactPlayer from 'react-player'
// import FitnessTracker from '../media/FitnessTracker.mp4'

class FitnessTracker extends React.Component {

    state = {
        aboutShowing: true
    }

    handleChangeShowing = () => {
        this.setState({
            aboutShowing: !this.state.aboutShowing
        })
    }

    render() {

        return (

            <div className="one-second-animation" >
                {this.state.aboutShowing === true ?
                    <div>
                        <h2 className="project-div-headers h2" >Fitness Tracker</h2>
                        <p className="p" id="about" >Fitness Tracker tracks a users workout regime and calculates total weight and time displayed in stats.</p>
                        <br></br>
                        <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button>
                        <a href="https://github.com/TestadeNevill/tDNFitnessTracker" rel="noopener noreferrer" target="_blank" >
                            <button className="buttons small-buttons" >GitHub</button>
                        </a>
                    </div>
                    :
                    <div className="video-player-background">
                        <button className="buttons close-buttons" onClick={this.handleChangeShowing} >✖</button>
                        <div className="video-containers" >
                            {/* <ReactPlayer className="react-player"
                                playing
                                controls={true}
                                wrapper={"video-containers"}
                                url={[
                                    { src: FitnessTracker, type: 'video/mp4' }, */}
                            {/* ]}
                            /> */}
                        </div>
                    </div>
                }

            </div>

        );

    }



}

export default FitnessTracker;