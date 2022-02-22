
import {useParams, useOutletContext} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getRequest} from './../../services/axios'
import {
    Container1,
    Container,
    TrackDetails,
    Number,
    ImageAndTrackName,
    Image,
    NameAndBy,
    TrackName,
    TrackBy,
    AlbumName,
    Duration


} from './style'
const Track = ({track, index}) => {
    const [trackUri, setTrackUri] = useOutletContext()
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    // console.log(trackUri)

    return (

        <Container onClick={() => setTrackUri(track.uri)}>
            <TrackDetails>
                <Number>{index}</Number>
                <ImageAndTrackName>
                    <Image src={track.album.images[0].url} alt={track.album.images[0].url} />
                    <NameAndBy>
                        <TrackName>{track.name}</TrackName>
                        <TrackBy>{track.album.artists[0].name}</TrackBy>
                    </NameAndBy>
                </ImageAndTrackName>
            </TrackDetails>
            <AlbumName>{track.album.name}</AlbumName>
            <Duration>{millisToMinutesAndSeconds(track.duration_ms)}</Duration>
        </Container>
    );
}
const AllSearchTrack = () => {
    const {query} = useParams()
    const [result, setResult] = useState()
    useEffect(() => {

        getRequest("/v1/search", {
            q: query,
            type: "artist,track,album,playlist,show,episode",
            include_external: "audio",
            limit: 20,
            market: "IN",
            offset: 5,
        }).then(res => {
            // console.log(res.data.tracks)
            setResult(res.data.tracks)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <Container1>
            {
                result?.items.map((track, index) => {
                    return <Track track={track} index={index} key={track.id} />
                })}
        </Container1>
    );
}
export default AllSearchTrack
