import {useEffect, useState} from "react";
import getRequest from '../services/axios'
import TopResult from '../components/topResult/topResult'
import SearchTracks from '../components/searchTracks/searchTracks'
import SearchResultType from '../components/searchResultType/searchResultType'
import {useParams} from "react-router-dom";
import {
    Container,
    TopAndTracks,
} from '../styles/search.style'
const Search = () => {
    const [result, setResult] = useState()
    const {query} = useParams();
    useEffect(() => {
        const searchIt = () => {

            getRequest("/v1/search", {
                q: query,
                type: "artist,track,album,playlist,show,episode",
                include_external: "audio",
                limit: 20,
                market: "IN",
                offset: 5,
            }).then(res => {
                console.log(res.data)
                setResult(res.data)
            }).catch(err => {
                console.log(err)
            })
        }
        const timerId = setTimeout(() => {
            searchIt()
            // make a request after 1 second since there's no typing 
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [query])
    if (!result) return <div>empty</div>;
    return (
        <Container>
            <TopAndTracks>
                <TopResult topPick={result?.albums.items[0]} />
                <SearchTracks result={result?.tracks} />
            </TopAndTracks>
            {result?.artists.items.length ? <SearchResultType data={result?.artists} key="artists" /> : <></>}
            {result?.albums.items.length ? <SearchResultType data={result?.albums} key="albums" /> : <></>}
            {result?.playlists.items.length ? <SearchResultType data={result?.playlists} key="playlists" /> : <></>}
            {result?.shows.items.length ? <SearchResultType data={result?.shows} key="shows" /> : <></>}
            {result?.episodes.items.length ? <SearchResultType data={result?.episodes} key="episodes" /> : <></>}
        </Container>
    );
}

// <SearchResultType data={result?.artists} key="artists" />
// <SearchResultType data={result?.albums} key="albums" />
// <SearchResultType data={result?.playlists} key="playlists" />
// <SearchResultType data={result?.shows} key="shows" />
// <SearchResultType data={result?.episodes} key="episodes" />
export default Search
