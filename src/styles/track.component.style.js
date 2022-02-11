
import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.25rem;
    // padding: 0 2.5%;
    &:hover{
        background: #2a2a2a;
    }
    @media (min-width:485px){
        padding: 0 0;
    }
`
export const TrackDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 40%;
    // max-width: 35%;
    // min-width: 35%;
    @media(max-width: 485px){
        width: 85%;
    }
`
export const Number = styled.div`
    width: 10%;
    color: #a1a1a1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImageAndTrackName = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
`
export const Image = styled.img`
    width: 20%;
    height: 20%;
    max-width:50px;
    max-height:50px;
    aspect-ratio: 1/1;
    padding: 7px;
`
export const NameAndBy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
`
export const TrackName = styled.h1`
    font-size: 14px;
    padding: 0 0;
    margin: 0 0;
    font-weight: 10;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const TrackBy = styled.h1`
    color: #a1a1a1;
    font-size: 0.875rem;
    font-weight: 300;
    padding: 0 0;
    padding-top: 4px;
    margin:0 0;
`
export const AlbumName = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
    width: 25%;
`
export const AddedDate = styled.div`
    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
    width:10%;
    @media(max-width:820px){
        display:none;
    }
`
export const Duration = styled.div`
    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
    width:20%;
    display:flex;
    flex-direction:row;
    justify-content:center;
`
