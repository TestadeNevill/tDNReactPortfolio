
import React from 'react';

class Education extends React.Component {

    state = {
        showCoding: false,
        showUCONN: false,
    }

    handleExpand = (event) => {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        })
    }

    render() {

        return (

            <div className="one-second-animation" >

                <h2 className="h2" >Education</h2>

                <div className="individual-resume-divs" id="showCoding" onClick={this.handleExpand} >
                    <h2 className="h2-standard individual-resume-divs-headers" id="showCoding" onClick={this.handleExpand} >Full Stack Software Development</h2>
                    <h3 className="h3" onClick={this.handleExpand} id="showCoding" >UCONN</h3>
                    <h4 className="h4" onClick={this.handleExpand} id="showCoding" >Stamford Connecticut, USA</h4>
                    <h4 className="h4" onClick={this.handleExpand} id="showCoding" >2020</h4>
                    <button id="showCoding" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showCoding === false ? "+ more" : "- less"} </button>
                    {this.state.showCoding === true ?
                        <div className="resume-bullet-points-div" >
                            <p className="resume-bullet-points" >Languages and Technologies: </p>
                            <p className="resume-bullet-points indented" >• HTML, CSS, Javascript, JQuery</p>
                            <p className="resume-bullet-points indented" >• API's, Node, Express, Handlebars</p>
                            <p className="resume-bullet-points indented" >• SQL, Sequilize, MongoDB, Mongoose</p>
                            <p className="resume-bullet-points indented" >• React</p>
                            <br></br>
                            <p className="resume-bullet-points" >Projects:</p>
                            <a href="https://github.com/TestadeNevill/tDNUserDirectory" className="indented" rel="noopener noreferrer" target="_blank" >
                                <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> User Directory: A React and MongoDb application.</p>
                            </a>
                            <a href="https://github.com/TestadeNevill/tDNFitnessTracker" className="indented" rel="noopener noreferrer" target="_blank" >
                                <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Fitness Tracker:  </p>
                            </a>
                            <a href="https://github.com/TestadeNevill/tDNWeatherDashboard" className="indented" rel="noopener noreferrer" target="_blank" >
                                <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Weather Dashboard: A Javascript application that uses a weather api to populate current and forecasted weather. </p>
                            </a>
                            <br></br>
                            <p className="resume-bullet-points" >Additional Skills: </p>
                            <p className="resume-bullet-points indented" >• Teamwork and Communication</p>
                            <p className="resume-bullet-points indented" >• Independent Work</p>
                            <p className="resume-bullet-points indented" >• Research</p>
                        </div>
                        :
                        null
                    }

                </div>

                <div className="individual-resume-divs" id="showUCONN" onClick={this.handleExpand} >
                    <h2 className="h2-standard individual-resume-divs-headers" id="showUCONN" onClick={this.handleExpand} >University of Connecticut</h2>
                    <h3 className="h3" id="showUCONN" onClick={this.handleExpand} >Undergradute</h3>
                    <h4 className="h4" id="showUCONN" onClick={this.handleExpand} >Storrs, CT</h4>
                    <h4 className="h4" id="showUCONN" onClick={this.handleExpand} >2010-2015</h4>
                    <button id="showUCONN" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showUCONN === false ? "+ more" : "- less"} </button>
                    {this.state.showUCONN === true ?
                        <div className="resume-bullet-points-div" >
                            <p className="resume-bullet-points" >• Geography.</p>
                            <p className="resume-bullet-points" >• City Planning.</p>
                            <p className="resume-bullet-points" >• Geographic Information Systems.</p>
                            <br></br>

                        </div>
                        :
                        null
                    }
                </div>

            </div>

        );

    }

}

export default Education;