import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it's chilly!",
        iconName: "snowflake"
    }
}

function getSeason(lat, month) {
   if (month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
   } else {
       return lat < 0 ? 'winter' : 'summer';
   }
}

export default function SeasonDisplay(props) {
    const season = getSeason(props.lat, new Date().getMonth());
    // const season = 'winter';
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1 className="text">{text}</h1>
            <i className={`${iconName} icon massive icon-right`}></i>    
        </div>
        );
}