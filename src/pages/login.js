import {
    Container,
    Button,
} from '../styles/login.style'

const path = `${window.location.protocol}//${window.location.host}/redirect`;
const SPACE_DELIMITER = '%20';
const SCOPES = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-library-read',
    'user-library-modify',
    'user-read-currently-playing',
    'user-read-playback-state',
    'playlist-read-private',
    'user-read-recently-played',
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const SPOTIFY_APP_AUTHORIZE_URL = "https://accounts.spotify.com/authorize"
const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const Login = () => {
    console.log(process.env)
    const AUTH_URL = `${SPOTIFY_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${path}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;

    return (
        <Container>
            <Button href={AUTH_URL}>
                Login With Spotify
            </Button>
        </Container>
    );
}

export default Login;
