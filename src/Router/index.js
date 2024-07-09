import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/Profile';
const RouterDOM = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
};
export default RouterDOM;
