import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.notifyPathname(window.location.pathname)
    }
    render() {
        return (
            <div>
                {
                    
                }
                
            </div>
        )
    }
}
