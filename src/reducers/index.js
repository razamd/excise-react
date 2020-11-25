import {combineReducers} from 'redux'
import roles from './roleReducer'
import login from './loginReducer'
import user from './userReducer'

export default combineReducers({
    rolesData:roles,
    loginData:login,
    usersData:user,

})