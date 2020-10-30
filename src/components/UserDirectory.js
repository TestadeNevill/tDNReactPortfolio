import React from 'react';
// import ReactPlayer from 'react-player'
// import UserDirectoryDemo from '../media/UserDirectory'

class UserDirectory extends React.Component {

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
                        <h2 className="h2 show-project-headers" >UserDirectory</h2>
                        <p className="p" id="about"  >UserDirectory is designed generate a user friendly list from an api. Using React and MongoDB I was able to load each user into a resuable component</p>
                        <p className="p" id="about" >Last updated..Oct 20th, 2020</p>
                        <div>
                            <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button>
                            <a href="https://github.com/TestadeNevill/tDNUserDirectory" rel="noopener noreferrer" target="_blank" >
                                <button className="buttons small-buttons" >GitHub</button>
                            </a>
                        </div>
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
                                    // { src: UserDirectory, type: 'video/mp4' },
                                ]}
                            /> */}
                        </div>
                    </div>
                }

            </div>

        );

    }



}

export default UserDirectory;