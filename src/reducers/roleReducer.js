import {
    ADD_ROLE_ERROR,
    ADD_ROLE_LOADING,
    ADD_ROLE_SUCCESS,
    EDIT_ROLE_ERROR,
    EDIT_ROLE_LOADING,
    EDIT_ROLE_SUCCESS,
    DELETE_ROLE_ERROR,
    DELETE_ROLE_LOADING,
    DELETE_ROLE_SUCCESS,
    FETCH_ROLE_ERROR,
    FETCH_ROLE_LOADING,
    FETCH_ROLE_SUCCESS
} from '../actions/roleActions';

const defaultState = {
    roles: [],
    error: null,
    isLoading: false,
}

const roleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ROLE_SUCCESS:
            return { ...state, roles: [...state.roles, action.payload] }
        case ADD_ROLE_ERROR:
            return { ...state, error: action.payload }
        case DELETE_ROLE_SUCCESS:
            const filteredRoles = state.roles.filter(role => role.id != action.payload)
            return { ...state, roles: filteredRoles };
        case DELETE_ROLE_ERROR:
            return { ...state, error: action.payload }
        case EDIT_ROLE_SUCCESS:
            const updatedRoles = state.roles.filter(role => role.id != action)
            return { ...state, roles: [...updatedRoles, action.payload] };
        case EDIT_ROLE_ERROR:
            return { ...state, error: action.payload }
        case FETCH_ROLE_SUCCESS:
            return { ...state, roles: action.payload }
        case FETCH_ROLE_LOADING:
            return { ...state, isLoading: action.payload }
        case FETCH_ROLE_ERROR:
            return { ...state, error: action.payload }


        default:
            return state;
    }
}
export default roleReducer;