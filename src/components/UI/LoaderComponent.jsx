import React from 'react';

const LoaderComponent = ({size}) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img 
            style={{width:size }}
            src='./assets/icons/loader.gif' 
            alt="loader" />
        </div>
    );
};

export default LoaderComponent;