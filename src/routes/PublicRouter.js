import React from 'react';
import {Redirect, Route} from "react-router-dom";

function PublicRouter({component: Component, auth, path, ...rest }) {
    return (
        // esos props son todo lo que tiene ...rest
        <Route  {...rest} component={(props) => !auth.log ? <Component {...props}/> : <Redirect to={"/"}/> }/>
    );
}

export default PublicRouter;