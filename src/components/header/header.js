import {useState} from 'react'
import {ReactComponent as Back} from './../../assets/leftArrow.svg'
import {ReactComponent as Clear} from './../../assets/wrong-svgrepo-com.svg'
import {ReactComponent as Front} from './../../assets/rightArrow.svg'
import {ReactComponent as Menu} from './../../assets/menu-icon.svg'
import {ReactComponent as SearchIcon1} from './../../assets/search-magnifier-outline-svgrepo-com.svg'
import {useNavigate} from 'react-router-dom'
import {
    Container,
    NavButtons,
    SearchContainer,
    SearchIcon,
    ClearIcon,
    Search,
    MenuIcon,
    NavButton,
} from './style'

const Header = ({setNav}) => {
    const [input, setInput] = useState("")
    const isSearchPage = new RegExp(
        "search"
    );

    const navigate = useNavigate()
    const clear = () => {
        setInput("")
        navigate("/search")
    }
    const searching = (e) => {
        setInput(e.target.value)
        navigate(`/search/${e.target.value}`, {replace: true})
    }

    return (
        <Container>
            <NavButtons>
                <NavButton onClick={() => navigate(-1)}><Back fill="white" width="20" height="20" /></NavButton>
                <NavButton onClick={() => navigate(+1)}><Front fill="white" width="20" height="20" /></NavButton>
            </NavButtons>
            {isSearchPage.test(window.location.href) ?
                <SearchContainer>
                    <SearchIcon><SearchIcon1 width="25" height="25" fill="black" /></SearchIcon>
                    <Search placeholder="Artists, Songs or Podcasts" value={input} onChange={(e) => searching(e)} ></Search>
                    {input ? <ClearIcon><Clear onClick={() => clear()} width="15" height="15" fill="black" /></ClearIcon> : <></>}
                </SearchContainer>
                : <></>}
            <MenuIcon>
                <Menu onClick={() => setNav(true)} style={{width: "20px", height: "20px", cursor: "pointer", fill: "white"}} />
            </MenuIcon>
        </Container >
    );
}
export default Header
