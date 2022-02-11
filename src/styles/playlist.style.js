
import styled from 'styled-components'

export const Container = styled.div`
    background: #121212;
    width:95%;
    padding: 0 2.5%;
    // max-width: 99%;
    // min-width: 90%;
    // padding: 0 10px;
`
export const PlaylistContainer = styled.div`
    width: 95%;
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    margin: 0 2.5%;
    @media(max-width:485px){
        flex-direction: column;
        align-items: center;
    }
`
export const PlayListImage = styled.img`
    width: 18rem;
    height: 18rem;
    aspect-ratio: 1/1;
    border: none;
    @media(max-width: 485px){
        width: 12rem;
        height: 12rem;
    }
`

export const PlaylistContentContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:end;
    padding-left:15px;
    max-height: 18rem;
`
export const Type = styled.div`
    font-size: 0.75rem;
    line-height: 1rem;
    @media(max-width: 485px){
        display: none;
    }
`
export const Title = styled.h2`
    font-size: 40px;
    padding:0px 0px;
    line-height: 1;
    font-weight: 700;
    font-family: 'san-serif','poppins';
    @media(max-width:915px){
        font-size: 35px;
            
    }
    @media(max-width:680px){
        font-size: 24px;
    }
`
export const Description = styled.h1`
    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
`

export const ButtonsContainer = styled.div`
    display:flex;
    width: 95%;
    flex-direction:row;
    align-items:center;
    margin:20px 2.5%;
`
export const PlayButton = styled.div`
    background: #1db954;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: default;
    margin-right: 1.25rem;
`
export const Button = styled.div`
    margin-right: 1.25rem;
    width: 50px;
    // background:blue;
`
export const TrackDetails = styled.div`
    display: flex;
    flex-direction: row;
`
export const TracksHeader = styled.div`
    position: sticky;
    top:0;
    padding: 10px 0;
    margin-bottom: 10px;
    background: #121212;
    width: 95%;
    padding: 0 2.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.005rem solid #a1a1a1;
    color: #a1a1a1;
    @media(max-width: 485px){
        display: none;
    }
`

export const TrackName = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // padding: 7px;
    color: #a1a1a1;
`
