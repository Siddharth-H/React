import React from 'react'

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
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the Beach';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    console.log(season);
    //Implementing JSX using Ternary Operator
    return (
    <div>
        <i className={`${icon} icon`} />

        <h1>

        { text }
        </h1>
        <i className={`${icon} icon`} />
    </div>
    );
};

export default SeasonDisplay;