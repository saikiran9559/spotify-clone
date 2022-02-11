
import axios from 'axios'
const getRequest = async (url) => {
    const accessToken = JSON.parse(localStorage.getItem('params')).access_token
    const Data = await axios
        .get(
            `https://api.spotify.com/v1/${url}`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
            },
        })
    return Data;
}

export default getRequest
