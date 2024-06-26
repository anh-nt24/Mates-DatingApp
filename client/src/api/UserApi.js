import axios from "axios";
import React from 'react';

export const UserLogin = async (form) => {
    const config = {
        method: "POST",
        url: 'http://localhost:5000/login',
        data:{
            'username': form.username,
            'password': form.password
        },
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }
    const { data } = await axios(config)
    return data
}

export const UserSignUp = async (form) => {
    const config = {
        method: 'POST',
        url: 'http://localhost:5000/signup',
        data: form,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const { data } = await axios(config)
    return  data
}

export const GetUserInfo = async (id) => {
    const { data } = await axios.get('http://localhost:5000/getinfo', {
        params: {id}
    })
    return data
}