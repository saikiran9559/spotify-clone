import styled from 'styled-components'


export const Container = styled.div`
    width:49%;
    display: flex;
    flex-direction: column;
    gap:10px;
`
export const Heading = styled.h1`
    font-size: 25px;
    width: 100%;
    height: 30px;
    font-weight: 300px;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Card = styled.div`
    width: 95%;
    background: #181818;
    cursor: pointer;
    flex-grow:1;
    border-radius: 10px;
    padding: 2.5%;
    &:hover{
        background: #282828;
    }
`
export const Imgae = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 10px;
    
`
export const Name = styled.div`
    // font-size: 35px;
    // font-weight: 400;
    // margin: 0px 0px;
    max-width:70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:10px
`
export const By = styled.div`
    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
`
export const Type = styled.div`
    background: black;
    border-radius: 20px;
    padding: 5px 10px;
`

