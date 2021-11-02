import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {authTypes} from "../types/authTypes";


function NavBar(props) {

    const history =useHistory()
    const {dispatch} = useContext(AuthContext);

    function handleLogOut() {

        dispatch({type:authTypes.logout})
        history.replace("/login")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <h2 className="navbar-brand" >Dragon Ball-Z</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink activeClassName={"active text-white"} className="nav-link active"
                                     aria-current="page" to={"/men"}>Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={"active text-white"} className="nav-link"
                                     to={"/women"}>Women</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName={"active text-white"} className="nav-link"
                                     to={"/search"}>Search</NavLink>
                        </li>

                    </ul>
                    <div className={"d-flex "}>
                        <button className={"btn btn-danger"} onClick={handleLogOut}>Log Out</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;