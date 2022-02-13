import {useState} from 'react'
import {ReactComponent as Back} from './../../assets/leftArrow.svg'
import {ReactComponent as Front} from './../../assets/rightArrow.svg'
import {ReactComponent as Menu} from './../../assets/menu-icon.svg'
import {useNavigate} from 'react-router-dom'
import {
    Container,
    NavButtons,
    MenuIcon,
    Search,
    Profile,
    NavButton,
} from './style'

const Header = ({menuClicked, setMenuClicked}) => {
    const navigate = useNavigate()
    // const [search, setSearch] = useState()
    const searching = (e) => {
        navigate(`/search/${e.target.value}`)
    }

    const menuclickHandle = () => {
        setMenuClicked(!menuClicked)
        console.log("clicked")
    }
    return (
        <Container>
            <NavButtons>
                <NavButton><Back fill="white" width="20" height="20" /></NavButton>
                <NavButton><Front fill="white" width="20" height="20" /></NavButton>
            </NavButtons>
            <MenuIcon><Menu fill="white" width="30" height="30" onClick={menuclickHandle} /></MenuIcon>
            <Search onChange={(e) => searching(e)} ></Search>
            <Profile></Profile>
        </Container>
    );
}
export default Header
