import Track from './track'
import {useParams, Link} from 'react-router-dom'
import {
    Container,
    HeaderAndLink,
    Heading,
    SeeAll
} from './style'
const SearchTracks = ({result}) => {
    const {query} = useParams()
    const path = "/search/" + query + "/tracks";
    // console.log(result)
    return (
        <Container>
            <HeaderAndLink>
                <Heading>Songs</Heading>
                <Link to={path} style={{textDecoration: 'inherit', color: '#a1a1a1'}}><SeeAll>SEE ALL</SeeAll></Link>
            </HeaderAndLink>
            {result.items.slice(0, 4).map((track) => {
                return <Track track={track} key={track.id} />
            })}
        </Container>
    );
}
export default SearchTracks
