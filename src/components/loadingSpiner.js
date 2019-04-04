import React from 'react';
import './loadingSpiner.css';

export default function LoadingSpinner(props) {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader"><h1>{props.message}</h1></div>
        </div>  
    );
}

LoadingSpinner.defaultProps = {
    message: "Please wait loading..."
}