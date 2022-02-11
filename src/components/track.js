
import {useEffect, useState} from 'react'
import {
    Container,
    TrackDetails,
    Number,
    ImageAndTrackName,
    Image,
    NameAndBy,
    TrackName,
    TrackBy,
    AlbumName,
    AddedDate,
    Duration

} from '../styles/track.component.style'

const Track = ({track, index, setTrackUri}) => {
    const [isMobileView, setIsMobileView] = useState(false);

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function formatDate(string) {
        var options = {year: 'numeric', month: 'short', day: 'numeric'};
        return new Date(string).toLocaleDateString([], options);
    }
    const handleResize = () => {
        if (window.innerWidth < 485) {
            setIsMobileView(true)
        }
        else {
            setIsMobileView(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    })
    const handleClick = () => {
        setTrackUri(track.track.uri)
    }

    return (
        <Container onClick={handleClick}>
            <TrackDetails>
                {isMobileView ? <></> : <Number>{index}</Number>}
                <ImageAndTrackName>
                    <Image src={track.track.album.images[0].url} alt={track.track.album.images[0].url} />
                    <NameAndBy>
                        <TrackName>{track.track.name}</TrackName>
                        <TrackBy>{track.track.album.artists[0].name}</TrackBy>
                    </NameAndBy>
                </ImageAndTrackName>
            </TrackDetails>
            {isMobileView ? <></> : <AlbumName>{track.track.album.name}</AlbumName>}
            {isMobileView ? <></> : <AddedDate>{formatDate(track.added_at)}</AddedDate>}
            {isMobileView ? <></> : <Duration>{millisToMinutesAndSeconds(track.track.duration_ms)}</Duration>}
        </Container>
    );
}

export default Track
