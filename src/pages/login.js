import {
    Container,
    Button,
} from '../styles/login.style'
// const { REACT_APP_CLIENT_ID, REACT_APP_AUTHORIZE_URL } = process.env;
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

// const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=1911f738b25348e29edee5a1deb7908c&response_type=code&redirect_uri=http://localhost:3000/redirect&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played";
const SPOTIFY_APP_AUTHORIZE_URL = "https://accounts.spotify.com/authorize"
const SPOTIFY_APP_CLIENT_ID = "1911f738b25348e29edee5a1deb7908c"
const Login = () => {
    const AUTH_URL = `${SPOTIFY_APP_AUTHORIZE_URL}?client_id=${SPOTIFY_APP_CLIENT_ID}&redirect_uri=${path}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;

    return (
        <Container>
            <Button href={AUTH_URL}>
                Login With Spotify
            </Button>
        </Container>
    );
}

export default Login;
