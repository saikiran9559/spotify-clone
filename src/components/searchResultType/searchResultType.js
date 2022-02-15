import Card from './../card/card'
import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {
    Container,
    Header,
    HeaderName,
    SeeAll,
    CardsContainer
} from './searchResultType.component.style'
const SearchResultType = ({data, select, type}) => {
    const [limit, setLimit] = useState()
    const length = data.items.length
    const {query} = useParams()
    const too = `/search/${query}/${data.items[0].type}s`

    function handleSize() {
        if (window.innerWidth < 601) {
            setLimit(length);
        }
        else if (window.innerWidth > 1220 && length >= 4) {
            setLimit(4)
        }
        else if (window.innerWidth <= 1220 && window.innerWidth > 940 && length >= 3) {
            setLimit(3)
        } else if (window.innerWidth <= 940 && length >= 2) {
            setLimit(2)
        } else {
            setLimit(length)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize)
    })

    return (
        <Container select={select} type={type}>
            <Header>
                <HeaderName>{data.items[0].type}</HeaderName>
                <Link to={too} ><SeeAll>See all</SeeAll></Link>
            </Header>
            <CardsContainer>
                {data?.items.slice(0, limit).map((item) => {
                    const input = {
                        img: item.images[0]?.url,
                        id: item.id,
                        owner: item.type,
                        name: "name",
                        type: item.type
                    }
                    return <Card input={input} key={item.id} />
                })}
            </CardsContainer>
        </Container>
    );
}

export default SearchResultType
