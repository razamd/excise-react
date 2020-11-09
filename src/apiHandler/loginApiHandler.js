import axios from 'axios'
import { history,loginURL } from '../index'


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