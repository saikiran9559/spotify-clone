
import {useEffect} from 'react'
import UserPlaylist from '../components/userPlaylists'
import {
    DashBoard,
} from '../styles/dashboard.style'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    const accessToken = JSON.parse(localStorage.getItem('params')).access_token;
    useEffect(() => {
        console.log(accessToken);
        if (!accessToken) {
            navigate("/login")
        }
    }, [accessToken])
    return (
        <DashBoard >
            <UserPlaylist />
        </DashBoard>
    );
}


export default Dashboard;
