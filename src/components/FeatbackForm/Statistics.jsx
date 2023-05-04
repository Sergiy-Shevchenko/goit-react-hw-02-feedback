import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div className="section">
    <span className="item">Good:<p className="rating">{good}</p></span>
    <span className="item">Neutral:<p className="rating">{neutral}</p></span>
    <span className="item">Bad:<p className="rating">{bad}</p></span>
    <span className="item">Total:<p className="rating">{total}</p></span>
    <span className="item">Positive feetback:<p className="rating">{positivePercentage}%</p></span>

</div> 
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired,
}


export default Statistics;