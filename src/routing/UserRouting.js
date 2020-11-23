import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import User from '../components/User'

export default class UserRouting extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact path="/user"
                    component={User}>
                </Route>
            </Switch>

        )
    }
}
