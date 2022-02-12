
import {useEffect, useState} from 'react'
import {ReactComponent as Dots} from '../assets/three-dots-menu-svgrepo-com.svg'
import {ReactComponent as Heart} from '../assets/heart-svgrepo-com.svg'
import {ReactComponent as Play} from '../assets/play-button-svgrepo-com.svg';
import getRequest from '../services/axios'
import Track from '../components/track'
import {useOutletContext} from 'react-router-dom';
import {
    Container,
    PlaylistContainer,
    PlayListImage,
    PlaylistContentContainer,
    Type,
    Title,
    Description,
    ButtonsContainer,
    PlayButton,
    Button,
    TracksHeader,
    TrackName
} from '../styles/playlist.style'

import {
    TrackDetails,
    Number,
    AlbumName,
    AddedDate,
    Duration
} from '../styles/track.component.style'

const Playlist = () => {
    const [playlist, setPlaylist] = useState()
    const [width, setWidth] = useState(window.innerWidth)
    const [trackUri, setTrackUri] = useOutletContext()
    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        const playlistId = localStorage.getItem('playlistId')
        // console.log("playlist id", playlistId)
        getRequest(`playlists/${playlistId}`)
            .then(res => {
                setPlaylist(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {


        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })
    return (
        <Container>

            <PlaylistContainer>
                <PlayListImage src={playlist?.images[0].url} alt={playlist?.images[0].url} />
                <PlaylistContentContainer>
                    <Type> PLAYLIST</Type>
                    <Title>  {playlist?.name} </Title>
                    <Description> {playlist?.description}</Description>
                </PlaylistContentContainer>
            </PlaylistContainer>

            <ButtonsContainer>
                <PlayButton> <Play width="15px" height="15px" fill="black" /> </PlayButton>
                <Button> <Heart width="30px" height="30px" fill="#1db954" /> </Button>
                <Button> <Dots width="20px" height="20px" fill="#a1a1a1" /> </Button>
            </ButtonsContainer>
            <TracksHeader>
                <TrackDetails>
                    <Number> # </Number>
                    <TrackName> TITLE </TrackName>
                </TrackDetails>
                <AlbumName> ALBUM </AlbumName>
                <AddedDate> DATE ADDED </AddedDate>
                <Duration>TIME</Duration>
            </TracksHeader>

            {playlist?.tracks.items.map((track, index) => {
                return <Track track={track} index={index} setTrackUri={setTrackUri} key={track.track.id} />
            })}

        </Container>
    );
}


export default Playlist
