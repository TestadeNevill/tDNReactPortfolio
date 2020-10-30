import React from 'react';

function Contact() {

    return (

        <div className="components one-second-animation" >
            <p className="p" >I'm currently looking for opportunities in the Greater New York City area. I am open to remote or other locations within the US. Feel free to contact me for an enthusiastic and creative developer! </p><br></br>
            <div id="contact-div">
                <a href="https://github.com/TestadeNevill" rel="noopener noreferrer" target="_blank" >
                    <img src={require("../media/github-icon.svg")} alt='' className="contact-icons" />
                </a><br></br>
                <a href="https://www.linkedin.com/in/dnicklecet/" rel="noopener noreferrer" target="_blank" >
                    <img src={require("../media/linkedin-icon.svg")} alt='' className="contact-icons" />
                </a><br></br>
                <a href={`mailto:dnickle.cetr@gmail.com`} >
                    <img src={require("../media/send.png")} alt='' className="contact-icons" />
                </a><br></br>
            </div>
        </div>

    );

}

export default Contact;