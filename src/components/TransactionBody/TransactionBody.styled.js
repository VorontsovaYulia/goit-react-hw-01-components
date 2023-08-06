import { styled } from "styled-components";

export const Value = styled.td`
    text-align: center;
    padding: 4px;
`

export const Row = styled.tr`
        background-color: ${props =>props.className ? '#ff788421' : '#ff788461'}
    /* :nth-child(odd) {
        background-color: #ff788461;
    }

    :nth-child(even) {
        background-color: #ff788421;
    } */
`