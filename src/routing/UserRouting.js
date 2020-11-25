import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateUser from '../containers/CreateUser'
import Users from '../containers/Users'

export default class UserRouting extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path="/user"
                    component={Users}>
                </Route>
                <Route
                    exact path="/user/create"
                    component={CreateUser}>
                </Route>
                <Route
                    exact path="/edit/user/:id"
                    component={(props) => <CreateUser {...props} />}>
                </Route>
            </Switch>
        )
    }
}
