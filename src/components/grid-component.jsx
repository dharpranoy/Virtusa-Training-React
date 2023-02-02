import React from 'react';

const Grid = () => {
    let img1 = "https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png"
    let img2 = "https://ih1.redbubble.net/image.1296136989.8851/st,small,507x507-pad,600x600,f8f8f8.jpg"
    let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgxLe0sd5LL1imaur9t9xImrdWvAWDUP6dA&usqp=CAU"
    let img_arr = [img1,img2,img]
    let div_arr = [] 

    for (let i=0;i<12;i++) {

          let x = Math.floor((Math.random() * 3) + 0);
          div_arr.push(<div className="column"><img className="thumbnail" src={img_arr[x]}/><h5>My Site</h5></div>)
        
    }
    return (
        <>
        {div_arr}
       </>
    );
}

export default Grid; 
