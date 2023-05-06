import React from "react";
import PropTypes from 'prop-types';


const Notification = ({message}) => {
    return (
        <h2 className="item">{message}</h2>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired,
}

export default Notification;