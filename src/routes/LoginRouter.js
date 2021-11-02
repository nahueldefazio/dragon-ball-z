import React, {useContext} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import AppRouter from "./AppRouter";
import {AuthContext} from "../context/AuthContext";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

function LoginRouter(props) {


    const {log} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                <PublicRouter path={"/login"} auth={log} component={LoginScreen}/>
                <PrivateRouter path={"/"} auth={log} component={AppRouter}/>
            </Switch>
        </BrowserRouter>
    );
}

export default LoginRouter;