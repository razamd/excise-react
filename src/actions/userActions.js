export const ADD_USER_ERROR = 'ADD_USER_ERROR';
export const ADD_USER_LOADING = 'ADD_USER_LOADING';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';

export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';
export const DELETE_USER_LOADING = 'DELETE_USER_LOADING';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const EDIT_USER_ERROR = 'EDIT_USER_ERROR';
export const EDIT_USER_LOADING = 'EDIT_USER_LOADING';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

//CREATE ACTION METHODS
export const createUserSuccess = (data) => {
    return {
        type: ADD_USER_SUCCESS,
        payload: data,
    }
}
export const createUserError = (data) => {
    return {
        type: ADD_USER_ERROR,
        payload: data,
    }
}
//EDIT ACTION METHODS
export const editUserError = (data) => {
    return {
        type: EDIT_USER_ERROR,
        payload: data,
    }

};

export const editUserSuccess = (data) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: data,
    }
};

//DELETE ACTION METHODS
export const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: id,
    }
}

export const deleteUserError = (data) => {
    return {
        type: DELETE_USER_ERROR,
        payload: data,
    }
}
//FETCH ACTION METHODS
export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data,
    }
}
export const fetchUsersLoading = (data) => {
    return {
        type: FETCH_USER_LOADING,
        payload: data,
    };
}
export const fetchUsersError = (data) => {
    return {
        type: FETCH_USER_ERROR,
        payload: data,
    };
}