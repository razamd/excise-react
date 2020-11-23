import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/role">Role</Link><br></br>
                <Link to="/user">User</Link>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
