import {useState} from 'react'
import {ReactComponent as Back} from './../../assets/leftArrow.svg'
import {ReactComponent as Front} from './../../assets/rightArrow.svg'
import {useNavigate} from 'react-router-dom'
import {
    Container,
    NavButtons,
    Search,
    Profile,
    NavButton,
} from './style'

const Header = () => {
    const navigate = useNavigate()
    // const [search, setSearch] = useState()
    const searching = (e) => {
        navigate(`/search/${e.target.value}`)
    }
    return (
        <Container>
            <NavButtons>
                <NavButton><Back fill="white" width="20" height="20" /></NavButton>
                <NavButton><Front fill="white" width="20" height="20" /></NavButton>
            </NavButtons>
            <Search onChange={(e) => searching(e)} ></Search>
            <Profile></Profile>
        </Container>
    );
}
export default Header
