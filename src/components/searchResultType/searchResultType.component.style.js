import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    // @media(max-width:601px){
    //     display: ${({select, type}) => select == type ? "flex" : "none"}
    // }
    
    @media(max-width:601px){
        display: ${({select, type}) => select == type ? "flex" : "none"};
        flex-wrap: wrap;
    }
`
export const Header = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media(max-width:601px){
        display: none;
    }
`
export const HeaderName = styled.h1`

`
export const SeeAll = styled.div`

`
export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap:12px;
    justify-content: space-between;
    @media(max-width: 601px){
        flex-wrap:wrap;
        padding-top: 30px;
    }
`
