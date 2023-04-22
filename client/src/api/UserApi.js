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