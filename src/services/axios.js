
import axios from 'axios'
export const getRequest = async (url, params) => {
    console.log(localStorage.getItem('params'))
    const accessToken = JSON.parse(localStorage.getItem('params')).access_token
    const Data = await axios
        .get(
            `https://api.spotify.com${url}`, {
            params: params,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        })
    return Data;
}

export default getRequest
