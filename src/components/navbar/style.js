import styled from 'styled-components'

export const Container = styled.nav`
    position:absolute;
    top:0px;
    left: 0px;
    height: 100%;
    z-index: 1;
    width: ${({width}) => width ? "300px" : "0px"};
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: black;
    transition: 0.2s linear;
    overflow: hidden;
    white-space: nowrap;

    @media(max-width:700px){
    }
    // align-items: center;
`
export const Items = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Item = styled.div`
    font-size: 0.875rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    height: 40px;
    gap:16px;
    width: 90%;
    width:70%;
    margin:0 auto;
`
export const Name = styled.div`
    font-size: 0.875rem;
    line-height: 1rem;
    text-transform: none;
    letter-spacing: normal;
`
export const Playlists = styled.div`
    display: flex;
    flex-direction: column;
`
