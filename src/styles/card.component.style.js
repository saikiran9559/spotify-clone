
import styled from 'styled-components'

export const Container = styled.div`
    background: #181818;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    padding:10px;
    max-width: 14rem;
    min-width: 14rem;
    border-radius: 0.25rem;
    cursor: pointer;
    &:hover{
        background: #282828;
    }
    @media (max-width:485px){
        max-width: 10rem;
        min-width:10rem;
    }

`
export const ImageBox = styled.div`
    position:relative;
    max-width:100%;
    border-radius: 0.25rem;
    aspect-ratio: 1/1;
    overflow:hidden;
`
export const Img = styled.img`
    height:100%;
    width: 100%;
`
export const PlayButton = styled.div`
    position: absolute;
    overflow: hidden;
    background: #1db954;
    max-width: 2.7rem;
    min-width: 2.7rem;
    max-height: 2.7rem;
    min-height: 2.7rem;
    aspect-ratio:1/1;
    bottom:0px;
    right: 0px;
    margin: 10px;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: default;
    &:hover{
        transform:scale(1.07)
    }
`
export const PlayListName = styled.h1`
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const By = styled.div`
    color: #a1a1a1;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 300;
`
