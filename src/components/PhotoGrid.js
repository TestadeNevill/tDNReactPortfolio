import React from 'react';

function PhotoGrid() {

    return (

        <div>

            <h2> Besides coding... </h2>

            <div className="components one-second-animation" id="photo-grid-div" >
                {/* Need to get Scotland image */}
                <div className="photo-grid-divs">
                    <p className="photo-grid-text">I'm love cities.</p>
                    <img src={require("../media/DOWCityInspo1.jpg")} alt='' className="photo-grid-photos" />
                </div>

                <div className="photo-grid-divs">
                    <p className="photo-grid-text">I'd love to vist outter space.</p>
                    <img src={require("../media/DOWdoingwhathedoesbest.jpg")} alt='' className="photo-grid-photos" />

                </div>

            </div>

        </div>

    );

}

export default PhotoGrid;