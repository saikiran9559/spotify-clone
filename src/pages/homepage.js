import {useState} from 'react'
import Player from '../components/player'
import NavBar from '../components/navbar/navbar'
import Header from '../components/header/header'
import {Outlet} from "react-router-dom"
import {
    HomeContainer,
    Container,
    DashContainer,
    OutletContainer,
    PlayerContainer,
} from '../styles/homepage.style'
const HomePage = () => {
    const [trackUri, setTrackUri] = useState();
    const [menuClicked, setMenuClicked] = useState()
    return (
        <Container>
            <HomeContainer>
                <NavBar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
                <DashContainer>
                    <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
                    <OutletContainer>
                        <Outlet context={[trackUri, setTrackUri]} />
                    </OutletContainer>
                </DashContainer>
            </HomeContainer>
            <PlayerContainer>
                <Player trackUri={trackUri} />
            </PlayerContainer>
        </Container >
    );
}



export default HomePage;
