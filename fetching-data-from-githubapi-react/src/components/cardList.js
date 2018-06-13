import React from "react";
import Card from "../components/card"

const CardList =(props)=>{
    return(
        <div>
        {props.data.map(user => <Card key={user.id} {...user}/>)}
       </div>
    );
}

export default CardList;