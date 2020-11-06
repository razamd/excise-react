import React, { Component } from 'react'
import {createRole} from '../apiHandler/roleApiHandler'
import {connect} from 'react-redux'

class CreateRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id:0,
            name:'',
            description:'',
            display_name:'',
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
            description:'',
            display_name:'',

        });

    }

    componentWillMount(){
        const props = this.props;

        if(props.location && props.location.state){
            const role =  props.location.state.role;

            this.setState({
                _id:role._id,
                name:role.name,
                description:role.description,
                display_name:role.display_name,
            })
        }
    }

    render() {
        return (
            <div className="create-role">
                {
                    this.props.error?
                    <div className="alert alert-danger" role="alert">
                        {this.props.error.message}
                        <p>All Fields are required</p>
                    </div>:''
                }
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                    <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter Description"
                            value={this.state.description}
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                    <input
                            type="text"
                            className="form-control"
                            name="display_name"
                            placeholder="Enter Display Name"
                            value={this.state.display_name}
                            onChange={this.handleValueChnage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
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
        error:state.rolesData.error,
    };
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onAdd:(role)=>{
            dispatch(createRole(role));
        }

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateRole);
