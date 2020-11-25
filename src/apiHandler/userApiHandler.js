import axios from 'axios'
import { history } from '../index'
import { URL } from '../GenericService'

import {
    createUserSuccess,
    createUserError,
    editUserSuccess,
    editUserError,
    deleteUserSuccess,
    deleteUserError,
    fetchUsersSuccess,
    fetchUsersError,
    fetchUsersLoading
} from '../actions/userActions'


// CREATE-------------------------------------------

export const createUser = (user) => {
    if (user._id) {
        const data = {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            password:user.password,
        };

        return (dispatch) => {
            dispatch(editUser(data));
        }

    }
    else {
        const data = {
            name: user.name,
            username: user.username,
            email: user.email,
            password:user.password,
        };
        return (dispatch) => {
            return axios.post(URL + 'user/create', data)
                .then(response => {
                    console.log('response ', response)
                    const id = response.data._id;
                    console.log('response ', response.data);
                    history.push('/user');

                }).catch(error => {
                    console.log(error)
                    alert('errorrr')
                    const errorPayload = {};
                    dispatch(createUserError(errorPayload))

                })
        }

    }

}

// EDIT---------------------------------------------------------------

export const editUser = (data) => {
    const id = data.id;

    const updateData = {
        name: data.name,
        username: data.username,
        email: data.email,
        password:data.password,
    }

    return (dispatch) => {
        return axios.post(URL + 'user/update/' + id, updateData)
            .then(() => {
                return axios.get(URL + 'user/view/' + id)
                    .then(response => {
                        dispatch(editUserSuccess(response.data));
                        history.push('/user')

                    }).catch(error => {
                        const errorPayload = {};
                        dispatch(editUserError(errorPayload))

                    });

            }).catch((error) => {
                console.log('errorr ', error)
            })
    }
}

//DELETE-------------------------------------------------------------

export const deleteUser = (id) => {
    return (dispatch) => {
        return axios.get(URL + 'user/delete/' + id)
            .then(() => {
                dispatch(deleteUserSuccess(id));
                history.push('/user')

            }).catch((error) => {
                console.log('error', error);

            })

    }
}

//FETCH--------------------------------------------------------------

export const fetchUsers = () => {
    //let isLoading = true;
    return (dispatch) => {
        // dispatch(fetchUsersLoading(isLoading));
        return axios.get(URL + 'user/getAll')
            .then(response => {
                dispatch(fetchUsersSuccess(response.data.body));
                console.log('users', response.data);
                // isLoading = false;
                // dispatch(fetchUsersLoading(isLoading));

            }).catch(error => {
                console.log('eror', error)

            })
    };
}