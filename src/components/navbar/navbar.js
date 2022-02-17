import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {ReactComponent as Home} from './../../assets/home-icon-silhouette-svgrepo-com.svg'
import {ReactComponent as Search} from './../../assets/search-magnifier-outline-svgrepo-com.svg'
import {ReactComponent as Library} from './../../assets/library-svgrepo-com.svg'
import {ReactComponent as AddIcon} from './../../assets/add-svgrepo-com.svg'
import {ReactComponent as Like} from './../../assets/heart-svgrepo-com.svg'
import {ReactComponent as Wrong} from './../../assets/wrong-svgrepo-com.svg'
import {
    Container,
    IconAndButton,
    ButtonClear,
    Items,
    Name,
    Item,
    Playlists,
} from './style'
const NavBar = ({nav, setNav}) => {
    return (
        <Container nav={nav}>
            <IconAndButton>
                <h1>Spotify</h1>
                <ButtonClear>
                    <Wrong onClick={() => setNav(false)} style={{width: "20px", height: "20px", cursor: "pointer", fill: "white"}} />
                </ButtonClear>
            </IconAndButton>
            <Items>
                <Link to="/" onClick={() => setNav(false)}><Item ><Home width="25" height="25" fill="white" /><Name>Home</Name></Item></Link>
                <Link to="/search" onClick={() => setNav(false)}> <Item ><Search width="25" height="25" fill="white" />Search</Item></Link>
                <Item ><Library width="25" height="25" fill="white" />Library</Item>
            </Items>
            <Items>
                <Item >
                    <AddIcon width="25" height="25" fill="white" />
                    <Name>Add New Playlist</Name>
                </Item>
                <Item ><Like width="25" height="25" fill="white" />Liked Songs</Item>
            </Items>
            <Playlists>
            </Playlists>
        </Container>
    );
}
export default NavBar

