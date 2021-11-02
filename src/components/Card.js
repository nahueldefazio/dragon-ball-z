import React from 'react';
import {Link} from "react-router-dom";

function Card({name, id, type}) {
    const path = `./assets/${type}-${id}.png`

    return (
        <div className={"card m-3 col-12 col-md-4"} style={{width: "200px"}}>
            <img loading={'lazy'} className={"card-img-top"} src={path} alt={id}/>
            <div className={'card-body'}>
                <h3 className={'card-title'}>{name}</h3>
                <p className={"card-text"}>
                    <Link className={"btn btn-dark"} to={`/character/${id}`}>...Ver mas</Link>
                </p>
            </div>
        </div>
    );
}

export default Card;