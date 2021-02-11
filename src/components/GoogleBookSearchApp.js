
import React from 'react';
// import ReactPlayer from 'react-player'
// import WeatherDashboard from '../media/WeatherDashboard.mp4'

class GoogleBookSearchApp extends React.Component {

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
                        <h2 className="project-div-headers h2" >Google Book Search App </h2>
                        <p className="p" id="about" >Google Book Search App allows the user to query and display books based on inputed searches. With React, Node, Express and MongoDB users can save books to review or purchase later.</p>
                        {/* <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button> */}
                        <a href="https://damp-headland-77691.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
                            <button className="buttons small-buttons" >Demo</button>
                        </a>
                        <a href="https://github.com/TestadeNevill/tDNGoogleBooksSearch" rel="noopener noreferrer" target="_blank" >
                            <button className="buttons small-buttons" >GitHub</button>
                        </a>
                    </div>
                    :
                    <div className="video-player-background">
                        <button className="buttons close-buttons" onClick={this.handleChangeShowing} >✖</button>

                    </div>
                }

            </div>

        );

    }



}

export default GoogleBookSearchApp;