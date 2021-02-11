import React from 'react';
import profile from '../media/TESTAINSPACE460.jpg'

function About() {

    return (

        <div className="components" id="about-div">
            <img src={profile} alt='' id="profile-picture" />
            <p className="p" id="about" >I'm Testa this is me in outer space. I'm a recent graduate from the UCONN Full Stack Web Development. </p>
            <p className="p" id="about" >I'm originally from Bridgeport, CT open to opportunities in any city. </p>
            <p className="p" id="about" >I'm excited to dive into a career as a full stack software engineer. The skill set interests me, specifically the astronomical amount of possible applications. It inspires me to continuously discover and create. I am ready to see what opportunities the future presents.</p>
        </div>

    );

}

export default About;