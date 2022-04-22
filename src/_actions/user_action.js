import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
} from './types'

export function loginUser(dataTosubmit){
    
    const request = axios.post('http://192.168.0.36:8080/member/login',dataTosubmit)
    .then(res =>res.data)
    
    return {
        type: LOGIN_USER,
        payload : request
    }
}

export function registerUser(dataTosubmit){
    
    const request = axios.post('http://192.168.0.36:8080/member/save',dataTosubmit )
    .then(res =>res.data)

    return {
        type: REGISTER_USER, 
        payload : request
    }
}


export function logoutUser(){
    return {
        type: LOGOUT_USER,
    }
}



