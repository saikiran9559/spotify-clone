import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import getRequest from '../services/axios'
import Card from '../components/card/card'
import {
    PlaylistContainer,
    FlexRowContainer,
    Heading,
    Button,
    CardsContainer,
} from '../styles/usrPlaylists.component.style'

const UserPlaylists = () => {
    const {navigate} = useNavigate();
    const hasWindow = typeof window !== 'undefined';
    const [tracks, setTracks] = useState();
    const [length, setLength] = useState(tracks?.items.length)
    const [limit, setLimit] = useState(length)
    const [isFlow, setIsFlow] = useState(false);

    const getlen = () => {
        setLength(tracks?.items.length)
    }
    const isOverFlow = () => {
        if (limit < length) {
            return setIsFlow(true)
        }
        return setIsFlow(false)
    }

    function handleResize() {
        if (window.innerWidth < 700) {
            setLimit(length);
            setIsFlow(true)
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
        getRequest("/v1/me/playlists").then(res => {
            setTracks(res.data)
        }).catch(err => {
            console.log("userplaylists", err)
            navigate("/login")
        })
    }, [])

    useEffect(() => {
        getlen()
        handleResize()
    }, [tracks])

    useEffect(() => {
        if (hasWindow) {
            handleResize()
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    })

    useEffect(() => {
        isOverFlow()
    }, [limit])



    return (
        <PlaylistContainer>
            <FlexRowContainer>
                <Heading >My PlayLists</Heading>
                {isFlow ? <Button> <Link
                    to='/playlists'
                >SEE ALL</Link></Button>
                    : <></>}
            </FlexRowContainer>
            <CardsContainer>
                {tracks?.items?.slice(0, limit).map((track) => {
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
        </PlaylistContainer>
    );
}

export default UserPlaylists
