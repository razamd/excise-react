import axios from 'axios'
import { history } from '../index'
import {
    createRoleSuccess,
    createRoleError,
    editRoleSuccess,
    editRoleError,
    deleteRoleSuccess,
    deleteRoleError,
    fetchRolesLoading,
    fetchRolesError,
    fetchRolesSuccess
} from '../actions/roleActions'

const url = 'http://192.168.2.43:3000/api/role/view'

// CREATE-------------------------------------------

export const createRole = (role) => {
    if (role._id) {
        const data = {
            id: role._id,
            name: role.name,
            description: role.description,
            displayName: role.display_name,
        };

        return (dispatch) => {
            dispatch(editRole(data));
        }

    }
    else {
        const data = {
            name: role.name,
            description: role.description,
            displayName: role.display_name,
        };
        return (dispatch) => {
            return axios.post('http://192.168.2.43:3000/api/role/add', data)
                .then(response => {
                    const id = response.data.savedRole._id;
                    console.log('response ', response.data);

                    axios.get(`${url}/${id}`)
                        .then(response => {
                            const data = response.data;
                            const normalizedData = {
                                id: data._id,
                                name: data.name,
                                description: data.description,
                                displayName: data.display_name,
                            }
                            dispatch(createRoleSuccess(normalizedData));
                            history.push('/role')

                        }).catch(error => {
                            const errorPayload = {};

                            errorPayload['message'] = error.response.data.message;
                            errorPayload['status'] = error.response.data.status;

                            dispatch(createRoleError(errorPayload))

                        })
                }).catch(error => {
                    const errorPayload = {};

                    errorPayload['message'] = error.response.data.message;
                    errorPayload['status'] = error.response.data.status;

                    dispatch(createRoleError(errorPayload))

                })
        }

    }

}

// EDIT---------------------------------------------------------------

export const editRole = (data) => {
    const id = data.id;

    const updateData = {
        name: data.name,
        description: data.description,
        displayName: data.displayName,
    }

    return (dispatch) => {
        const updateUrl = 'http://192.168.2.43:3000/api/role/update'
        return axios.patch(`${updateUrl}/${id}`, updateData)
            .then(() => {
                return axios.get(`${url}/${id}`)
                    .then(response => {
                        dispatch(editRoleSuccess(response.data));
                        history.push('/role')

                    }).catch(error => {
                        const errorPayload = {};

                        errorPayload['message'] = error.response.data.message;
                        errorPayload['status'] = error.response.data.status;

                        dispatch(editRoleError(errorPayload))

                    });

            }).catch((error) => {

                const errorPayload = {};

                errorPayload['message'] = error.response.data.message;
                errorPayload['status'] = error.response.data.status;

                dispatch(editRoleError(errorPayload))

            })
    }
}

//DELETE-------------------------------------------------------------

export const deleteRole = (id) => {
    const urlDelete = 'http://192.168.2.43:3000/api/role/delete'
    return (dispatch) => {
        return axios.delete(`${urlDelete}/${id}`)
            .then(() => {
                dispatch(deleteRoleSuccess(id));
                history.push('/role')

            }).catch((error) => {

                const errorPayload = {};

                errorPayload['message'] = error.response.data.message;
                errorPayload['status'] = error.response.data.status;

                dispatch(deleteRoleError(errorPayload));

            })

    }
}

//FETCH--------------------------------------------------------------

export const fetchRoles = () => {
    let isLoading = true;
    return (dispatch) => {
        dispatch(fetchRolesLoading(isLoading));
        return axios.get('http://192.168.2.43:3000/api/role/getAll')
            .then(response => {
                dispatch(fetchRolesSuccess(response.data));
                isLoading = false;
                dispatch(fetchRolesLoading(isLoading));

            }).catch(error => {
                const errorPayload = {};
                errorPayload['message'] = error.response.data.message;
                errorPayload['status'] = error.response.status;

                dispatch(fetchRolesError(errorPayload));

                isLoading = false;
                dispatch(fetchRolesLoading(isLoading));

            })
    };
}