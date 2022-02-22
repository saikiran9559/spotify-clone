
import styled from "styled-components";
export const Tracks = styled.div`
    display:inline;
    @media(min-width:601px){
        display: none;
    }
`
export const EmptyContainer = styled.div`
    margin:0 10%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    position: relative;
    width: 95%;
    padding: 0px 2.5%;
    display: flex;
    flex-direction: column;
`
export const TopAndTracks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    @media(max-width:601px){
        display: none;
    }
`
export const SelectType = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow-x: auto;
    position: fixed;
    // padding: 0px 0px;
    top:70px;
    background: #121212;
    z-index: 1;
`
export const TypeButton = styled.button`
    border: none;
    outline: none;
    padding: 7px 15px;
    border-radius: 50px;
    background: ${({select, type}) => select == type ? "green" : "white"};
    @media(min-width: 601px){
        display: none;
    }
`
