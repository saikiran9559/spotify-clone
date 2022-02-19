import {useEffect, useState} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
// import {getRequest, postRequest} from './../services/axios'


const Player = ({trackUri}) => {
    const [play, setPlay] = useState(false)
    // const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState()
    const accessToken = JSON.parse(localStorage.getItem('params')).access_token
    // const [devices, setDevices] = useState(null)
    // const addTrackToQueue = (uri) => {
    // console.log("adding song")
    // console.log("funkl", devices)
    // postRequest("/v1/me/player/queue", {
    //     uri: uri,
    //     device_id: devices ? devices[0]?.id : "527785f5096bab87cc6e8bfa15190d575b0f298d",
    //     // devices_id: devices[0]?.id
    // }).then(data => {
    //     console.log(data)
    // }).catch(err => {
    //     console.log(err)
    // })
    // }
    useEffect(() => setPlay(true), [trackUri])

    // useEffect(() => {
    //     getRequest("/v1/me/player/recently-played", {
    //         limit: 10,
    //     }).then(data => {
    //         // console.log(data.data.items)
    //         setRecentlyPlayedTracks(data.data.items)
    //     }).catch(err => {
    //         console.log(err)
    //     })

    //     getRequest("/v1/me/player/devices").then(data => {
    //         // console.log(data.data)

    //         setDevices(data.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })

    // }, [])

    // useEffect(() => {
    //     console.log("jfslf")
    //     if (devices?.length == 0) {
    //         console.log("hi there")
    //     } else {
    //         console.log("afterl", devices)
    //         addTrackToQueue("spotify:track:5PvwPy5eRO8BPwpRzCHK3D", devices)
    //     }
    // }, [devices])


    // useEffect(() => {
    // if (recentlyPlayedTracks.length) {
    //     recentlyPlayedTracks.map((item) => {
    //         addTrackToQueue(item.track.uri)
    //     })
    // }
    // }, [recentlyPlayedTracks])

    if (!accessToken) return <></>;
    return (
        <SpotifyPlayer

            styles={{
                activeColor: '#fff',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
            }}

            token={accessToken}
            showSaveIcon
            callback={state => {
                if (!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={trackUri ? [trackUri] : []}
        />
    );
}

export default Player;
