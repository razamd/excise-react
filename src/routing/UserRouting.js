import React, { Component } from 'react'
import {Route } from 'react-router-dom'
import User from '../components/User'

export default class UserRouting extends Component {
    render() {
        return (
            <Route
              exact path="/user"
              component={User}>
            </Route>
        )
    }
}
