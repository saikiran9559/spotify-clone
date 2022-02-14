
import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
`

export const HomeContainer = styled.div`
    display:flex;
    flex-direction: row;
    width:100%;
    // padding-bottom:100px;
`
export const DashContainer = styled.div`
    position: relative;
    width: 80%;
    height:100%;
    display: flex;
    flex-direction: column;
    @media(max-width:700px){
        width:100%;
    }
    // padding-bottom: 100px;
`

export const OutletContainer = styled.div`
    // height: 100%;
    width:100%;
    padding-bottom: 100px;
    // flex-grow:1;
    overflow-y:auto;
`
export const PlayerContainer = styled.div`
    position: fixed;
    width: 95%;
    bottom:0px;
    margin: 0 2.5%;
`
