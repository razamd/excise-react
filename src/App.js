import './App.css';
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom'

import RoleRouting from './routing/RoleRouting';
import UserRouting from './routing/UserRouting';

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
          <RoleRouting></RoleRouting>
        </div>
      </Router>
    );
  }
}
export default App;
