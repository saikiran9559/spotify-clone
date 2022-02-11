import {useEffect, useState} from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';


const Player = ({trackUri}) => {
    const [play, setPlay] = useState(false)
    const accessToken = JSON.parse(localStorage.getItem('params')).access_token
    useEffect(() => setPlay(true), [trackUri])
    if (!accessToken) return null;
    return (
        <SpotifyPlayer

            styles={{
                activeColor: '#fff',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: 'green',
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
