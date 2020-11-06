export const LOGIN = 'LOGIN';

export const loginSuccess = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}