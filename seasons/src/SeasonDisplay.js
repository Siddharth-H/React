import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr it is cold",
        iconName: "snowflake"
    }
};
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat>0 ? 'summer' : 'winter'; //Ternary Operator
    }
    else{
        return lat<0 ? 'summer' : 'winter'; //Ternary Operator

    }
};
const SeasonDisplay = (props) => {
    // console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];
    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the Beach';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    console.log(season);
    console.log("icon="+iconName);
    //Implementing JSX using Ternary Operator

    return (
    <div className={`season-display ${season}`}>

        <i className={`icon-left massive ${iconName} icon`} />
        <h1>
        { text }
        </h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;