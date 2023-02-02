import React from 'react';

const Form = () => {
    return (
        <>
         <div className="medium-6 columns">
            <label>Name
              <input type="text" placeholder="Name" />
            </label>
            <label>Email
              <input type="text" placeholder="Email" />
            </label>
            <label>
              Message
              <textarea placeholder="holla at a designerd"></textarea>
            </label>
            <input type="submit" className="button expanded" value="Submit" />
          </div>

        </>
    );
}

export default Form; 
