import './App.css';
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom'

import RoleRouting from './routing/RoleRouting';
import UserRouting from './routing/UserRouting';
import AuthRouting from './routing/AuthRouting';
import Nav from './components/Nav';

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
           <Nav></Nav>
          <AuthRouting></AuthRouting>
          <RoleRouting></RoleRouting>
          <UserRouting></UserRouting>
        </div>
      </Router>
    );
  }
}
export default App;
