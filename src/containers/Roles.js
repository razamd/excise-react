import React, { Component } from 'react'
import { connect } from 'react-redux';
import Role from '../components/Role';
import { fetchRoles } from '../apiHandler/roleApiHandler'
import { deleteRole } from '../apiHandler/roleApiHandler'
import { history } from '../index'
import { Link } from 'react-router-dom';

class Roles extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onFetch();
    }

    handleEdit(role) {
        history.push({
            pathname: `/edit/${role._id}`,
            state: {
                role: role,
            }
        })

    }

    render() {
        if (this.props.isLoading) {
            return (
                <p>Loading....</p>
            )
        }
        else if (this.props.error) {
            return (
                <div className="alert alert-danger" role="alert">
                    {this.props.error.message}
                    Not Found
                </div>
            )
        }
        else {
            return (
                <div>
                    <Link to="role/create">Add New Role</Link><br></br><br></br>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Display Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.roles.map(role => {
                                    return (
                                        <Role key={role._id}
                                            role={role}
                                            onEdit={this.handleEdit.bind(this)}
                                            onDelete={this.props.onDelete}
                                        >
                                        </Role>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                </div>
            )
        }

    }
}
const mapStateToProps = (state) => {
    return {
        roles: state.rolesData.roles || [],
        error: state.rolesData.error || null,
        isLoading: state.rolesData.isLoading,

    }
}
const mapeDistpatchToProps = (disptach) => {
    return {
        onFetch: () => {
            disptach(fetchRoles());
        },

        onDelete: (id) => {
            disptach(deleteRole(id));
        }
    }
}
export default connect(mapStateToProps, mapeDistpatchToProps)(Roles);