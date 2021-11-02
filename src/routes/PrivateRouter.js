import React from 'react';
import {Redirect, Route} from "react-router-dom";

function PrivateRouter({component: Component,auth, ...rest}) {
    return (
        <Route {...rest} component={(props)=> auth.log ? <Component {...props} /> : <Redirect to={"/login"} /> }/>
    );
}

export default PrivateRouter;