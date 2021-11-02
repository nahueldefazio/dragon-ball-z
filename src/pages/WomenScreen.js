import React from 'react';
import Card from "../components/Card";
import {Characters} from "../models/Characters";

function WomenScreen(props) {
    const women = Characters.filter(character => character.type === "m")
    return (
        <div className={"container mt-3"}>
            <h1> Men Screen</h1>
            <hr/>
            <div className={"row"}>
                {women.map((women,index)=>{
                    return <Card key={index} {...women} />
                })}
            </div>


        </div>
    );
}

export default WomenScreen;