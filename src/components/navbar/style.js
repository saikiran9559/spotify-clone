import styled from 'styled-components'

export const Container = styled.nav`
    position:sticky;
    top:0px;
    left: 0px;
    height: 100vh;
    z-index: 3;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: black;
    transition: 0.2s linear;
    overflow: hidden;
    white-space: nowrap;

    @media(max-width:700px){
// ${({width}) => width ? "300px" : "0px"}
        position: fixed;
        left:0px;
        width: ${({nav}) => nav ? "100%" : "0%"};
        z-index:2;
    }
    // align-items: center;
`
export const IconAndButton = styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Items = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin:0 auto;
`
export const ButtonClear = styled.div`
    display: flex;
    @media(min-width:700px){
        display:none;
    }
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
    width: 100%;
    color: white;
`
export const Name = styled.div`
    font-size: 0.875rem;
    line-height: 1rem;
    text-transform: none;
    letter-spacing: normal;
    color: white;
    text-decoration: inherit;
`
export const Playlists = styled.div`
    display: flex;
    flex-direction: column;
`
