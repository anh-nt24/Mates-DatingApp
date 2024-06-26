import axios from 'axios'

export const GetNearestUsers = async (id) => {
    const { data } = await axios.get(
        'http://localhost:5000/getnearst', 
        {
            params: {id}
        }
    );
    return data
}

export const GetSimilarUsers = async (form) => {
    const config = {
        method: 'POST',
        url: 'http://localhost:5000/getsimilar',
        data: form,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const { data } = await axios(config)
    return  data
}