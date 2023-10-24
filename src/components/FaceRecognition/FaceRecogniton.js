import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
    console.log(box);
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="input-image" src={imgUrl} alt="Your input" width="500px" height="auto" />
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;