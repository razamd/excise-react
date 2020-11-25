import React, { Component } from 'react'
import User from '../components/User';
import { connect } from 'react-redux';
import { history } from '../index'
import { fetchUsers,deleteUser } from '../apiHandler/userApiHandler'
import { Link } from 'react-router-dom';

class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onFetch();
    }
    handleEdit(user) {
        history.push({
            pathname: `/edit/user/${user._id}`,
            state: {
                user: user,
            }
        })

    }
    render() {
        return (
            <div>
                <Link to="user/create">Add New User</Link><br></br><br></br>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map(user => {
                                return (
                                    <User key={user._id}
                                        user={user}
                                        onEdit={this.handleEdit.bind(this)}
                                        onDelete={this.props.onDelete}
                                    >
                                    </User>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        users: state.usersData.users || [],
        error: state.usersData.error || null,
        isLoading: state.usersData.isLoading,

    }
}
const mapeDistpatchToProps = (disptach) => {
    return {
        onFetch: () => {
            disptach(fetchUsers());
        },

        onDelete: (id) => {
            disptach(deleteUser(id));
        }
    }
}
export default connect(mapStateToProps, mapeDistpatchToProps)(Users);
