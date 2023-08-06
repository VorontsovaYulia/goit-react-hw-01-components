import { styled } from "styled-components";

export const Circle = styled.span`
    background: ${props => props.children ? 'green' : 'red'};
    border-radius: 50%;
    height: 16px;
    width: 16px;
`

export const Text = styled.p`
    font-weight: 700;
`