import Card from './../card/card'
import {Link, useParams} from 'react-router-dom'
import {
    Container,
    Header,
    HeaderName,
    SeeAll,
    CardsContainer
} from './searchResultType.component.style'
const SearchResultType = ({data}) => {
    const {query} = useParams()
    const too = `/search/${query}/${data.items[0].type}s`
    return (
        <Container>
            <Header>
                <HeaderName>{data.items[0].type}</HeaderName>
                <Link to={too} ><SeeAll>See all</SeeAll></Link>
            </Header>
            <CardsContainer>
                {data?.items.slice(0, 2).map((item) => {
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

// {data?.items.slice(0, 3).map((item) => {
//     const input = {
//         img: item.images[0]?.url,
//         id: item.id,
//         owner: "owner",
//         name: "name",
//         type: item.type
//     }
//     return <Card input={input} key={item.id} />
// })}



// const input = {
//     img:item.images[0].url,
//     id:item.id,
//     owner:item.owner.display_name,
//     name:item.name,
//     type: item.type
// }
// return <Card input={input} key={item.id} />
export default SearchResultType
