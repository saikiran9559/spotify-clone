import {Link} from 'react-router-dom';
import {
    Container,
} from './style'
const NavBar = () => {

    return (
        <Container>
            <Link to="/search">search</Link>
        </Container>
    );
}
export default NavBar
