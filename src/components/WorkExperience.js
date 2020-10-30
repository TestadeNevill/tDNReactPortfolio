import React from 'react';

class WorkExperience extends React.Component {

    state = {
        smartLink: false,
        showSanFranciscoBoxOffice: false,
        showBerlitz: false,
        showAMSAB: false,
        showMuseumOfEdinburgh: false,
        showStudentRepresentativeCouncil: false
    }

    handleExpand = (event) => {
        this.setState({
            [event.target.id]: !this.state[event.target.id]
        })
    }

    render() {

        return (

            <div className="one-second-animation" >

                <h2 className="h2" >Work Experience</h2>

                <div className="individual-resume-divs" id="smartLink" onClick={this.handleExpand} >

                    <h2 className="h2-standard individual-resume-divs-headers" id="smartLink" onClick={this.handleExpand} >SmartLink LLC</h2>
                    <h3 className="h3" id="smartLink" onClick={this.handleExpand} >Telecommunications Company</h3>
                    <h4 className="h4" id="smartLink" onClick={this.handleExpand} >Parsippany-Troy Hills, New Jersey</h4>
                    <h4 className="h4" id="smartLink" onClick={this.handleExpand} >Jan 2019- Sept 2020</h4>
                    <button id="smartLink" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.smartLink === false ? "+ more" : "- less"} </button>
                    {this.state.smartLink === true ?
                        <div className="resume-bullet-points-div" >
                            <p className="resume-bullet-points" >• Oversee lease negotiations, design, permitting and construction of tower and rooftop telecommunication projects.
</p>
                            <p className="resume-bullet-points" >• Coordinate with various personnel to ensure sites follow municipal regulations, meet client budget guidelines, engineering and construction requirements and project deadlines</p>
                            <p className="resume-bullet-points" >• Coordinated events and orders in an accurate, thorough, organized, and efficient way which led to a significant decrease in order errors.</p>
                        </div>
                        :
                        null
                    }

                </div>

            </div>

        );

    }

}

export default WorkExperience;