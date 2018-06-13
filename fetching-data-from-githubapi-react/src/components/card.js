import React from "react";



let Card =(props)=>{
    return(
        <div>
        <img
        style={{width: 40, height: 40}}
        alt="Images"
        src={props.avatar_url} />
        <h1>{props.name}</h1>
        <p>{props.company}</p>
        </div>
    );
}

export default Card;