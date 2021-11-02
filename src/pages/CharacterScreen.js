import React from 'react';
import {useParams} from "react-router-dom";
import {Characters} from "../models/Characters";

function CharacterScreen({history}) {

    const {id} = useParams()
    const character = Characters.find(character => character.id === id)
    const path = `/assets/${character.type}-${character.id}.png`

    function handleBack() {
        history.goBack()
    }

    return (
        <div className={"container row  mt-3"}>
            <div className={"col-8"}>
                <img className={"img--thumbnail"} src={path} alt={id} style={{width: "70%", height: "400px"}}/>
            </div>
            <div className={"col-4"}>
                <h2>Nombre:{character.name}</h2>
                <p>Description: {character.description}</p>

                <button className={"btn btn-outline-warning"} onClick={handleBack}>Go Back</button>
            </div>
        </div>
    );
}

export default CharacterScreen;