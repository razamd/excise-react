import axios from 'axios'
import { history } from '../index'
import { loginURL } from '../GenericService'


// CREATE-------------------------------------------

export const loginTo = (login) => {
        const data = {
            username: login.email,
            password: login.password,
        };
        return (dispatch) => {
            return axios.post(loginURL, data)
                .then(response => {
                    const data=response.data;
                    const token=data.token;
                    localStorage.setItem('token',token)
                    if(token){
                        history.push('/home')
                    }
                }).catch(error => {
                    console.log('Error',error)

                });
        }
}