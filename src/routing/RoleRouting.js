import React, { Component } from 'react'
import Login from '../containers/Login';
import Signup from '../components/Signup';
import Roles from '../containers/Roles';
import Logout from '../components/Logout';
import Home from '../components/Home';
import User from '../components/User';
import CreateRole from '../containers/CreateRole';
import {Route, Switch } from 'react-router-dom'

export default class RoleRouting extends Component {
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
              exact path="/role"
              component={Roles}>
            </Route>
            <Route
              exact path="/logout"
              component={Logout}>
            </Route>
            <Route
              exact path="/role/create"
              component={CreateRole}>
            </Route>
            <Route
              exact path="/edit/:id"
              component={(props) => <CreateRole {...props} />}>
            </Route>
          </Switch>
        )
    }
}
