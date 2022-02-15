import {useEffect, useState} from "react";
import AllSearchTrack from './allSearchTracks'
import getRequest from '../services/axios'
import TopResult from '../components/topResult/topResult'
import SearchTracks from '../components/searchTracks/searchTracks'
import SearchResultType from '../components/searchResultType/searchResultType'
import {useParams} from "react-router-dom";
import {
    Container,
    TopAndTracks,
    SelectType,
    TypeButton,
} from '../styles/search.style'
const Search = () => {
    const [result, setResult] = useState()
    const {query} = useParams();
    const [select, setSelect] = useState("track")
    useEffect(() => {
        if (!query) return;
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
    if (!query || !result) return <div>empty</div>;
    return (
        <Container>
            <TopAndTracks>
                <TopResult topPick={result?.albums.items[0]} />
                <SearchTracks result={result?.tracks} />
            </TopAndTracks>
            <SelectType>
                {result?.tracks.items.length ? <TypeButton select={select} type="track" onClick={() => setSelect("track")}>Songs</TypeButton> : <></>}
                {result?.albums.items.length ? <TypeButton select={select} type="album" onClick={() => setSelect("album")}>Albums</TypeButton> : <></>}
                {result?.artists.items.length ? <TypeButton select={select} type="artist" onClick={() => setSelect("artist")}>Artists</TypeButton> : <></>}
                {result?.playlists.items.length ? <TypeButton select={select} type="playlist" onClick={() => setSelect("playlist")}>Playlists</TypeButton> : <></>}
                {result?.shows.items.length ? <TypeButton select={select} type="show" onClick={() => setSelect("show")}>Shows</TypeButton> : <></>}
                {result?.episodes.items.length ? <TypeButton select={select} type="episode" onClick={() => setSelect("episode")}>Episodes</TypeButton> : <></>}
            </SelectType>
            {select == "track" ? <AllSearchTrack /> : <></>}
            {result?.artists.items.length ? <SearchResultType select={select} type="artist" data={result?.artists} key="artists" /> : <></>}
            {result?.albums.items.length ? <SearchResultType select={select} type="album" data={result?.albums} key="albums" /> : <></>}
            {result?.playlists.items.length ? <SearchResultType select={select} type="playlist" data={result?.playlists} key="playlists" /> : <></>}
            {result?.shows.items.length ? <SearchResultType select={select} type="show" data={result?.shows} key="shows" /> : <></>}
            {result?.episodes.items.length ? <SearchResultType select={select} type="episode" data={result?.episodes} key="episodes" /> : <></>}
        </Container>
    );
}

// <SearchResultType data={result?.artists} key="artists" />
// <SearchResultType data={result?.albums} key="albums" />
// <SearchResultType data={result?.playlists} key="playlists" />
// <SearchResultType data={result?.shows} key="shows" />
// <SearchResultType data={result?.episodes} key="episodes" />
export default Search
