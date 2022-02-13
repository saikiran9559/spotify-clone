import {useParams} from 'react-router-dom'
import Card from './../card'
import {useEffect, useState} from 'react';
import getRequest from './../../services/axios'
import {
    Container,
    Heading,
    CardsContainer
} from './style'
const AllResultType = ({type}) => {
    const [result, setResult] = useState()
    const {query} = useParams();
    useEffect(() => {

        getRequest("/v1/search", {
            q: query,
            type: "artist,track,album,playlist,show,episode",
            include_external: "audio",
            limit: 20,
            market: "IN",
            offset: 5,
        }).then(res => {
            console.log(res.data[type])
            setResult(res.data[type])
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <Container>
            <Heading>{`All ${result?.items[0].type}s for "${query}"`}</Heading>
            <CardsContainer>

                {result?.items.map((item) => {
                    const input = {
                        img: item.images[0]?.url,
                        id: item.id,
                        owner: "owner",
                        name: "name",
                        type: item.type
                    }
                    return <Card input={input} key={item.id} />
                })}
            </CardsContainer>
        </Container>
    );
}

export default AllResultType
