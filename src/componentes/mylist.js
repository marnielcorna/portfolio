// import React, { useState } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';

// let MyList = ()=>{
//   const arr = ["A","B","C","D"];
//   return <p>{arr[1]}</p>
//   }
//   const el = <MyList/>;
//   ReactDOM.render(el, document.getElementById('root'));

// export default MyList; 

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

let MyList = ()=> {
    
        return (
          <div>
          <div class="item">Vertically centered 1</div>
          <div class="item">Vertically centered 2</div>
          <div class="item">Vertically centered 3</div>
          <div class="item">Vertically centered 4</div>
          <div class="item">Vertically centered 5</div>
       </div>
        );
    
};

export default MyList;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>