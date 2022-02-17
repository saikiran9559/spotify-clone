import axios from "axios";
import {useState, useEffect} from "react";
import {Buffer} from 'buffer'
import SpotifyWebApi from 'spotify-web-api-node'
const UseAuth = (code) => {
    // const spotifyApi = SpotifyWebApi({
    //     redirectUri: `${window.location.protocol}//${window.location.host}/redirect`,
    //     clientId: process.env.REACT_APP_CIENT_ID,
    //     clientSecret: process.env.REACT_APP_SECRET_CODE
    // });
    console.log(code)
    const [accessToken, setAccessToken] = useState()
    const encodedString = new Buffer(process.env.REACT_APP_CIENT_ID + ':' + process.env.REACT_APP_SECRET_CODE).toString('base64');
    const REACT_APP_CIENT_ID = process.env.REACT_APP_CIENT_ID
    const REACT_APP_SECRET_CODE = process.env.REACT_APP_SECRET_CODE
    const redirectUri = `${window.location.protocol}//${window.location.host}/redirect`;

    // GENERATING CODE VERIFIER
    function dec2hex(dec) {
        return ("0" + dec.toString(16)).substr(-2);
    }
    function generateCodeVerifier() {
        var array = new Uint32Array(56 / 2);
        window.crypto.getRandomValues(array);
        return Array.from(array, dec2hex).join("");
    }
    const code_verifier = generateCodeVerifier();
    const login = async () => {
        console.log(code_verifier)
        await axios.post("https://accounts.spotify.com/api/token", {
            params: {
                grant_type: "authorization_code",
                code: code,
                redirect_uri: redirectUri,
                client_id: REACT_APP_CIENT_ID,
                secret_id: REACT_APP_SECRET_CODE,
                code_verifier: code_verifier,
            },
            headers: {
                Authorization: 'Basic ' + encodedString,
                'Content-Type': 'application/json'
            }

        }).then(data => {
            console.log(data.body)
        }).catch(err => {
            console.log(err)
        })
    }

    // const login = async () => {
    //     await spotifyApi.authorization_code(code).then(data => {
    //         console.log(data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
    useEffect(() => {
        login()
    }, [])
    return <div>useAuth</div>;
}

export default UseAuth
