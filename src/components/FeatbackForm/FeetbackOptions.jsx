import React from "react";
import PropTypes from 'prop-types';
import css from './statistics.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map(option => (
        <button
        key={option}
        type="button" 
        className={css.button}
        onClick={() => onLeaveFeedback(option)}
        >{option}
        </button>      
    ))
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired, 
    onLeaveFeedback: PropTypes.func.isRequired,   
}

export default FeedbackOptions;