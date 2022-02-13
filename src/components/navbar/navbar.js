import {Link} from 'react-router-dom';
import {useEffect} from 'react'
import {
    Container,
} from './style'
const NavBar = ({menuClicked, setMenuClicked}) => {
    useEffect(() => {
        console.log(menuClicked)
    }, [menuClicked])
    return (
        <Container pp={menuClicked}>
            <Link to="/search">search</Link>
        </Container>
    );
}
export default NavBar
