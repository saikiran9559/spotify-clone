
import {getRequest} from '../services/axios'
import Card from '../components/card/card'
import {
    Container,
    Heading,
    CardsContainer
} from '../styles/userAllPlaylists.style'
import {useState, useEffect} from 'react'
const UserAllPlaylists = () => {
    const [playlists, setPlayLists] = useState();
    useEffect(() => {
        getRequest("/v1/me/playlists").then(res => {
            // console.log(res.data)
            setPlayLists(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])




    return (
        <Container>
            <Heading> My Playlists</Heading>
            <CardsContainer>
                {playlists?.items?.map((track) => {
                    const input = {
                        img: track.images[0].url,
                        id: track.id,
                        owner: track.owner.display_name,
                        name: track.name,
                        type: "playlist"
                    }
                    return <Card input={input} key={track.id} />
                })}
            </CardsContainer>
        </Container>
    );
}
export default UserAllPlaylists;
