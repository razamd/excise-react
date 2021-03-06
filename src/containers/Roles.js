import React, { Component } from 'react'
import { connect } from 'react-redux';
import Role from '../components/Role';
import { fetchRoles } from '../apiHandler/roleApiHandler'
import { deleteRole } from '../apiHandler/roleApiHandler'
import { history } from '../index'
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";

class Roles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
          };
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
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({
            activePage:pageNumber
        });
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
                    <Pagination
                        prevPageText='Prev'
                        nextPageText='Next'
                        firstPageText='First'
                        lastPageText='Last'
                        activePage={this.state.activePage}
                        itemsCountPerPage={2}
                        totalItemsCount={10}
                        onChange={this.handlePageChange.bind(this)}
                    />

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