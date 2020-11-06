import {combineReducers} from 'redux'
import roles from './roleReducer'
import login from './loginReducer'

export default combineReducers({
    rolesData:roles,
    loginData:login,

})