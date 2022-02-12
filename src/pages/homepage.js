import {useState} from 'react'
import Player from '../components/player'
import {Outlet} from "react-router-dom"
import {
    HomeContainer,
    PlayerContainer,
    OutletContainer
} from '../styles/homepage.style'
const HomePage = () => {
    const [trackUri, setTrackUri] = useState();
    return (
        <HomeContainer >
            <OutletContainer>
                <Outlet context={[trackUri, setTrackUri]} />
            </OutletContainer>
            <PlayerContainer>
                <Player trackUri={trackUri} />
            </PlayerContainer>
        </HomeContainer>
    );
}

export default HomePage;
