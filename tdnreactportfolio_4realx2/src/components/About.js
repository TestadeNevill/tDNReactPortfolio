import React from 'react';

function About() {

    return (

        <div className="components" id="about-div">
            <img src={require("../media/me.jpg")} alt='' id="profile-picture" />
            <p className="p" id="about" >I'm Testa, a recent graduate from the UCONN Full Stack Web Development program. </p>
            <p className="p" id="about" >I'm originally from Bridgeport, CT open to opportunities in any city. </p>
            <p className="p" id="about" >I'm excited to dive into a career as a full stack software engineer. The skill set interests me, specifically the astronomical amount of possible applications. It inspires me to continuously discover and create. I am ready to see what opportunities the future presents.</p>
        </div>

    );

}

export default About;