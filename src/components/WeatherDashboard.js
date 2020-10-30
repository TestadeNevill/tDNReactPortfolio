
import React from 'react';
// import ReactPlayer from 'react-player'
// import WeatherDashboard from '../media/WeatherDashboard.mp4'

class Gandr extends React.Component {

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
                        <h2 className="project-div-headers h2" >Weather Dashboard</h2>
                        <p className="p" id="about" >Weather Dashboard is a JavaScript Single Page Application, with a Rails backend which allows users to browse a range of beautiful artworks from the Metropolitan Museum of Art, and to add comments and likes to their favorite pieces.</p>
                        <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button>
                        <a href="https://github.com/TestadeNevill/tDNWeatherDashboard" rel="noopener noreferrer" target="_blank" >
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
                                    { src: WeatherDashboard, type: 'video/mp4' }, */}
                            {/* ]}
                            /> */}
                        </div>
                    </div>
                }

            </div>

        );

    }



}

export default Gandr;