import React, { Component } from 'react'
import {createUser} from '../apiHandler/userApiHandler'
import {connect} from 'react-redux'

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id:0,
            name:'',
            username:'',
            email:'',
            password:'',
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleValueChnage(e){
        this.setState({
            [e.target.name]:e.target.value,
        })   
    }
    handleReset(e){
        e.preventDefault();
        this.setState({
            _id:0,
            name:'',
            username:'',
            email:'',
            password:'',

        });

    }

    componentWillMount(){
        const props = this.props;

        if(props.location && props.location.state){
            const user =  props.location.state.user;

            this.setState({
                _id:user._id,
                name:user.name,
                username:user.username,
                email:user.email,
                password:user.password,

            })
        }
    }

    render() {
        return (
            <div className="create-role">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            required
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                    <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter User Name"
                            required
                            value={this.state.username}
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                    <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                    <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        <button type="button" className="btn btn-default"
                            onClick={this.handleReset.bind(this)}>
                            Cancel
                        </button>
                    
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        error:state.usersData.error,
    };
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onAdd:(user)=>{
            dispatch(createUser(user));
        }

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);
