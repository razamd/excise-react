import './App.css';
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateRole from './containers/CreateRole';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import { Link } from 'react-router-dom'
import Login from './containers/Login';
import Signup from './components/Signup';
import Roles from './containers/Roles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: '',
    };

    this.notifyPathname = this.notifyPathname.bind(this);
  }

  notifyPathname(pathname) {
    this.setState({
      pathname: pathname,
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
              exact path="/user"
              component={User}>
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

        </div>
      </Router>
    );
  }
}
export default App;
