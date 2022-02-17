import {useState} from 'react'
import Player from './../../components/player'
import NavBar from './../../components/navbar/navbar'
import Header from './../../components/header/header'
import {Outlet, useNavigate, Navigate} from "react-router-dom"
import {
    HomeContainer,
    Container,
    DashContainer,
    OutletContainer,
    PlayerContainer,
} from './style'

const HomePage = () => {
    const [trackUri, setTrackUri] = useState();
    const [nav, setNav] = useState(false);
    const accessToken = JSON.parse(localStorage.getItem('params'))

    if (!accessToken) return <Navigate to="/login" />

    return (
        <Container>
            <HomeContainer>
                <NavBar nav={nav} setNav={setNav} />
                <DashContainer>
                    <Header nav={nav} setNav={setNav} />
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
