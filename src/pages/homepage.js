import {useState} from 'react'
import Player from '../components/player'
import NavBar from '../components/navbar/navbar'
import Header from '../components/header/header'
import {Outlet, useNavigate, Navigate} from "react-router-dom"
import {
    HomeContainer,
    Container,
    DashContainer,
    OutletContainer,
    PlayerContainer,
} from '../styles/homepage.style'

const HomePage = () => {
    const [trackUri, setTrackUri] = useState();
    const [width, setWidth] = useState(false);
    const accessToken = JSON.parse(localStorage.getItem('params'))

    if (!accessToken) return <Navigate to="/login" />

    return (
        <Container>
            <HomeContainer>
                <NavBar width={width} setWidth={setWidth} />
                <DashContainer>
                    <Header width={width} setWidth={setWidth} />
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
