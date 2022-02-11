
import styled from 'styled-components'

export const PlaylistContainer = styled.section`
    width: 95%;
    padding: 0 2.5%;
    overflow: hidden;
`

export const FlexRowContainer = styled.div`
    width: 100%;
    max-height: 7vh;
    min-height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Heading = styled.h1`
    font-size: 1.5rem;
    line-height: 2rem;
`

export const Button = styled.button`
    background-color: transparent;
    text-decoration: none;
    height: 5vh;
    width:70px;
    color: #a1a1a1;
    font-size: 0.75rem;
    line-height: 1rem;
    cursor: pointer;
    border: none;
    outline: none
`

export const CardsContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    gap:10px;
    @media (max-width:485px){
        overflow-x:scroll;
        white-space: non-wrap;
        justify-content: none;
    }
`
