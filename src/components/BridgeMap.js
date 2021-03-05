import React from 'react';
// import googlebooksearch from '../media/googlebooksearch.png'

class BridgeMap extends React.Component {

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
                        <h2 className="h2 show-project-headers" >BridgeMap</h2>
                        {/* <img src={googlebooksearch} alt='' id="Googlescreenshot" /> */}
                        <p className="p" id="about"  >My first project out of the bootcamp. I created a Google map that can search locations and pan to the destination. In the future I plan to add Google Directions API and improve the infowindow box to display location information.</p>
                        <p className="p" id="about" >Last updated..Jan 20th, 2021</p>
                        <div>
                            {/* <button className="buttons small-buttons" onClick={this.handleChangeShowing} >Demo</button> */}
                            <a href="https://bridgemapv2.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
                                <button className="buttons small-buttons" >Demo</button>
                            </a>
                            <a href="https://github.com/TestadeNevill/bridgemapv2" rel="noopener noreferrer" target="_blank" >
                                <button className="buttons small-buttons" >GitHub</button>
                            </a>
                        </div>
                    </div>
                    :
                    <div className="video-player-background">
                        <button className="buttons close-buttons" onClick={this.handleChangeShowing} >✖</button>
                        <div className="video-containers" >

                        </div>
                    </div>
                }

            </div>

        );

    }



}

export default BridgeMap;