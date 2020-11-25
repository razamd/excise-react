import {
    ADD_USER_ERROR,
    ADD_USER_LOADING,
    ADD_USER_SUCCESS,
    EDIT_USER_ERROR,
    EDIT_USER_LOADING,
    EDIT_USER_SUCCESS,
    DELETE_USER_ERROR,
    DELETE_USER_LOADING,
    DELETE_USER_SUCCESS,
    FETCH_USER_ERROR,
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS
} from '../actions/userActions';

const defaultState = {
    users: [],
    error: null,
    isLoading: false,
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER_SUCCESS:
            return { ...state, users: [...state.users, action.payload] }
        case ADD_USER_ERROR:
            return { ...state, error: action.payload }
        case DELETE_USER_SUCCESS:
            const filteredUsers = state.users.filter(user => user.id != action.payload)
            return { ...state, users: filteredUsers };
        case DELETE_USER_ERROR:
            return { ...state, error: action.payload }
        case EDIT_USER_SUCCESS:
            const updatedUsers = state.users.filter(user => user.id != action)
            return { ...state, users: [...updatedUsers, action.payload] };
        case EDIT_USER_ERROR:
            return { ...state, error: action.payload }
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload }
        case FETCH_USER_LOADING:
            return { ...state, isLoading: action.payload }
        case FETCH_USER_ERROR:
            return { ...state, error: action.payload }


        default:
            return state;
    }
}
export default userReducer;