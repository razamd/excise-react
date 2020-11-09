import axios from 'axios'
import { history } from '../index'
import { loginURL } from '../GenericService'


// CREATE-------------------------------------------

export const loginTo = (login) => {
  
        const data = {
            email: login.email,
            password: login.password,
        };
        return (dispatch) => {
            return axios.post(loginURL+'user/login', data)
                .then(response => {
                    const data=response.data;
                    if(data.Token){
                        history.push('/home')
                    }
                    else{
                        alert('Invalid Token')
                    }
                }).catch(error => {
                    console.log('Error',error)

                });
        }
}