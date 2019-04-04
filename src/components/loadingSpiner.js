import React from 'react';
import './loadingSpiner.css';

export default function LoadingSpinner(props) {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">Please wait, loading...</div>
        </div>  
    );
}