import {useState} from 'react'
import {ReactComponent as Back} from './../../assets/leftArrow.svg'
import {ReactComponent as Clear} from './../../assets/wrong-svgrepo-com.svg'
import {ReactComponent as Front} from './../../assets/rightArrow.svg'
import {ReactComponent as Menu} from './../../assets/menu-icon.svg'
import {ReactComponent as SearchIcon} from './../../assets/search-magnifier-outline-svgrepo-com.svg'
import {useNavigate} from 'react-router-dom'
import {
    Container,
    NavButtons,
    MenuIcon,
    SearchContainer,
    Search,
    Profile,
    NavButton,
} from './style'

const Header = ({width, setWidth}) => {
    const isSearchPage = new RegExp(
        "search"
    );

    const navigate = useNavigate()
    const clear = () => {
        navigate("/search")
    }
    const searching = (e) => {
        navigate(`/search/${e.target.value}`, {replace: true})
    }

    return (
        <Container>
            <Menu onClick={() => setWidth(!width)} style={{width: "20px", height: "20px", cursor: "pointer", fill: "white"}} />
            <NavButtons>

                <NavButton onClick={() => navigate(-1)}><Back fill="white" width="20" height="20" /></NavButton>
                <NavButton onClick={() => navigate(+1)}><Front fill="white" width="20" height="20" /></NavButton>
            </NavButtons>
            {isSearchPage.test(window.location.href) ?
                <SearchContainer>
                    <SearchIcon width="25" height="25" fill="black" />
                    <Search placeholder="Artists, Songs or Podcasts" onChange={(e) => searching(e)} ></Search>
                    <Clear onClick={() => clear()} width="20" height="20" fill="black" />
                </SearchContainer>
                : <></>}
        </Container>
    );
}
// {input ? <Clear onClick={() => clear()} width="20" height="20" fill="black" /> : <></>}

// <MenuIcon><Menu fill="white" width="30" height="30" /></MenuIcon>
export default Header
