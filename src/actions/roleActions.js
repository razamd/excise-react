export const ADD_ROLE_ERROR = 'ADD_ROLE_ERROR';
export const ADD_ROLE_LOADING = 'ADD_ROLE_LOADING';
export const ADD_ROLE_SUCCESS = 'ADD_ROLE_SUCCESS';

export const DELETE_ROLE_ERROR = 'DELETE_ROLE_ERROR';
export const DELETE_ROLE_LOADING = 'DELETE_ROLE_LOADING';
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';

export const EDIT_ROLE_ERROR = 'EDIT_ROLE_ERROR';
export const EDIT_ROLE_LOADING = 'EDIT_ROLE_LOADING';
export const EDIT_ROLE_SUCCESS = 'EDIT_ROLE_SUCCESS';

export const FETCH_ROLE_ERROR = 'FETCH_ROLE_ERROR';
export const FETCH_ROLE_LOADING = 'FETCH_ROLE_LOADING';
export const FETCH_ROLE_SUCCESS = 'FETCH_ROLE_SUCCESS';

//CREATE ACTION METHODS
export const createRoleSuccess = (data) => {
    return {
        type: ADD_ROLE_SUCCESS,
        payload: data,
    }
}
export const createRoleError = (data) => {
    return {
        type: ADD_ROLE_ERROR,
        payload: data,
    }
}
//EDIT ACTION METHODS
export const editRoleError = (data) => {
    return {
        type: EDIT_ROLE_ERROR,
        payload: data,
    }

};

export const editRoleSuccess = (data) => {
    return {
        type: EDIT_ROLE_SUCCESS,
        payload: data,
    }
};

//DELETE ACTION METHODS
export const deleteRoleSuccess = (id) => {
    return {
        type: DELETE_ROLE_SUCCESS,
        payload: id,
    }
}

export const deleteRoleError = (data) => {
    return {
        type: DELETE_ROLE_ERROR,
        payload: data,
    }
}
//FETCH ACTION METHODS
export const fetchRolesSuccess = (data) => {
    return {
        type: FETCH_ROLE_SUCCESS,
        payload: data,
    }
}
export const fetchRolesLoading = (data) => {
    return {
        type: FETCH_ROLE_LOADING,
        payload: data,
    };
}
export const fetchRolesError = (data) => {
    return {
        type: FETCH_ROLE_ERROR,
        payload: data,
    };
}