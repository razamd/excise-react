import React, { Component } from 'react'
import Roles from '../containers/Roles';
import CreateRole from '../containers/CreateRole';
import { Route, Switch } from 'react-router-dom'

export default class RoleRouting extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact path="/role"
          component={Roles}>
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
