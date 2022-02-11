

import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import getRequest from '../services/axios'
import Card from '../components/card'
import {useNavigate} from 'react-router-dom'
import {
    PlaylistContainer,
    FlexRowContainer,
    Heading,
    Button,
    CardsContainer,
} from '../styles/usrPlaylists.component.style'
const RecentlyPlayed = () => {
    const navigate = useNavigate()
    const hasWindow = typeof window !== 'undefined';
    const [tracks, setTracks] = useState();
    const [length, setLength] = useState(tracks?.items.length)
    const [limit, setLimit] = useState(length)
    const [isFlow, setIsFlow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

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
        if (window.innerWidth < 485) {
            setLimit(length);
            setIsFlow(true)
        }
        else if (window.innerWidth > 1040 && length >= 4) {
            setLimit(4)
        }
        else if (window.innerWidth <= 1040 && window.innerWidth > 940 && length >= 3) {
            setLimit(3)
        } else if (window.innerWidth <= 940 && length >= 2) {
            setLimit(2)
        } else {
            setLimit(length)
        }
    }
    useEffect(() => {
        getRequest("me/player/recently-played").then(res => {
            console.log(res.data)
            setTracks(res.data)
        }).catch(err => {
            console.log(err)
            navigate('/login')
        })
    }, [])
    useEffect(() => {
        getlen()
        handleResize()
    }, [tracks])

    useEffect(() => {
        if (hasWindow) {
            setWidth(window.innerWidth)
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
            Recently played
        </PlaylistContainer>
    );
}

export default RecentlyPlayed