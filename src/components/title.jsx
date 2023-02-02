import React from 'react';


const Title = () => {
    return (
        <>
            <div className="title-bar hide-for-large">
              <div className="title-bar-left">
                <button className="menu-icon" type="button" data-open="my-info"></button>
                <span className="title-bar-title">Pranoy Dhar</span>
              </div>
            </div>
        </>
    );
}

export default Title; 
