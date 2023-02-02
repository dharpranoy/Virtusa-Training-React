import React from 'react';
import Slider from './side-profile';
import Header from './header';
import Grid from './grid-component';
import Footer from './footer';

const Main = () => {
    return (
        <>
          <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
            <Slider />              
          </div>

          <div className='off-canvas-content' data-off-canvas-content>
            <Header />  
          
              <div className="row small-up-2 medium-up-3 large-up-4">
                 <Grid /> 
              </div>
            
            <hr />
            <Footer />
          </div>

        </>
    );
}

export default Main; 
