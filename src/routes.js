import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Modules/Main/main';
import LoginScreen from "./Modules/LoginScreen/loginScreen";
import Dashboard from "./Modules/Dashboard/dashboard";
import CourseProfile from "./Modules/CourseProfile/courseProfile";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => { return <Main/> }}/>
                <Route path="/login" exact render={() => { return <LoginScreen /> }} />
                <Route parth="/dashboard" exact render={() => { return <Dashboard /> }} />
                <Route path="/courseprofile" exact render={() => {return <CourseProfile/>}} />
            </Switch>
        </Router>
    )
}