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
    return (
        <Container>
            <HomeContainer>
                <NavBar />
                <DashContainer>
                    <Header />
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
