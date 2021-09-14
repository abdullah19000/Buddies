import React from 'react';


const Card = (props) =>{
  
    return(
  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
   <img alt='photos' src={props.isrc} style={{width:'150px', height:'150px', objectfit:'cover'}}/>
    <div>
     <h2>{props.name}</h2>
     <p>{props.contact}</p>
    </div>
   </div>
    );


}

export default Card;