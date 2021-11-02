import React, {useContext} from 'react';
import {AuthContext} from "../context/AuthContext";
import {authTypes} from "../types/authTypes";
import {useHistory} from "react-router-dom";

function LoginScreen() {
    const history = useHistory()
    const {dispatch} = useContext(AuthContext);

    function handleLogin() {
        dispatch({type: authTypes.login})
        history.replace("/men")
    }

    return (
        <div className={'container mt-5 text-center'}>
            <img src={'/assets/animate.gif'} alt={"animation"}/>
            <h1 className={'my-3'}>Login Screen</h1>
            <button className={'btn btn-primary'} onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginScreen;