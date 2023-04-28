import axios from 'axios'

export const GetNearestUsers = async (id) => {
    const { data } = await axios.get('http://localhost:5000/getnearst', {
        params: {id}
    })
    return data
}