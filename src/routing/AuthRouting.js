import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Logout from '../components/Logout'
import Signup from '../components/Signup'
import Login from '../containers/Login'

export default class AuthRouting extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={Signup} />
                <Route
                    exact path="/home"
                    component={Home}>
                </Route>
                <Route
                    exact path="/logout"
                    component={Logout}>
                </Route>
            </Switch>

        )
    }
}
