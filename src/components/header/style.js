import styled from "styled-components"

export const Container = styled.div`
    position:sticky;
    top:0px;
    width:100%;
    z-index:1;
    background-color: #121212;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0px;

`

export const NavButtons = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const NavButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`
export const Search = styled.input`
    width: 200px;
`
export const Profile = styled.div`
    width: 100px;
    background: green;
`
