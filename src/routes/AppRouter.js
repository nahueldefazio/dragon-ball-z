import React, {Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MenScreen from "../pages/MenScreen";
import WomenScreen from "../pages/WomenScreen";
import SearchScreenContainer from "../pages/SearchScreenContainer";
import NavBar from "../components/NavBar";
import CharacterScreen from "../pages/CharacterScreen";

function AppRouter(props) {
    return (
        <Fragment>
            <NavBar/>
            <Switch>
                <Route exact path={"/men"} component={MenScreen}/>
                <Route exact path={"/women"} component={WomenScreen}/>
                <Route exact path={"/search"} component={SearchScreenContainer}/>
                <Route exact path={"/character/:id"} component={CharacterScreen}/>

                <Redirect to={"/men"}/>
            </Switch>
        </Fragment>

    );
}

export default AppRouter;