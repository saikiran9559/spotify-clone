import {useOutletContext} from 'react-router-dom';
import {
    Container,
    Image,
    NameAndBy,
    Name,
    By,
    Duration
} from './track.style'
const Track = ({track}) => {
    const [trackUri, setTrackUri] = useOutletContext()
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    return (
        <Container onClick={() => setTrackUri(track.uri)}>
            <Image src={track.album.images[0].url} alt={track.album.images[0].url} />
            <NameAndBy>
                <Name>{track.name}</Name>
                <By>{track.artists[0].name}</By>
            </NameAndBy>
            <Duration>{millisToMinutesAndSeconds(track.duration_ms)}</Duration>
        </Container>
    );
}

export default Track
