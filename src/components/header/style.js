import styled from "styled-components"

export const Container = styled.div`
    position:sticky;
    top:0px;
    width:94%;
    z-index:1;
    background-color: #121212;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 20px 3%;
    // @media(max-width:720px){
    //     justify-content: center;
    // }

`

export const NavButtons = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media(max-width:720px){
        display: none;
    }
`
export const NavButton = styled.div`
    width: 40px;
    cursor: pointer;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`
export const MenuIcon = styled.div`
    @media(min-width: 720px){
        display: none;
    }
`
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:50%;
    height:40px;
    background: white;
    border-radius: 25px;
    align-items:center;
    padding: 0 10px;
    gap: 10px;
    @media(max-width: 700px){
        flex-grow:1;
    }
`
export const SearchIcon = styled.div`
    display: flex;
    @media(max-width: 485px){
        display: none;
    }
`
export const ClearIcon = styled.div`
    display: flex;
`
export const Search = styled.input`
    background: none;
    flex-grow:1;
    border:none;
    &:focus{
        outline: none;
        border:none;
    }
`
export const Profile = styled.div`
    width: 100px;
    background: green;
    @media(max-width:720px){
        display: none;
    }
`
