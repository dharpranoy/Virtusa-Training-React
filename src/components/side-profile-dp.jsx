import React from 'react';
import MyInfo from './side-profile-info';

const Display = () => {
    const img = 'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png';
    return (
        <>
            <div className="row column">
              <br />
              <img className="thumbnail" src={img} />
              <MyInfo />
            </div>
        </>
    );
}

export default Display; 
