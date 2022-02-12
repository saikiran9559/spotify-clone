import styled from "styled-components";

export const Container = styled.div`
    width:94%;
    padding: 5px 2.5%;
    display: flex;
    flex-direction: row;
    // flex-grow:1;
    justify-content: space-between;
    gap:10px;
    // padding:10px;
`
export const Image = styled.img`
    width: 3rem;
    height: 3rem;
`
export const NameAndBy = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Name = styled.div`
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const By = styled.div`

    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
`
export const Duration = styled.div`

    color: #a1a1a1;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
`
