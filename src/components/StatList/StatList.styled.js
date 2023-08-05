import { styled } from "styled-components";

export const List = styled.ul`
    display: flex;
    border: 1px solid black;
    justify-content: space-around;
    background-color: rgb(254 79 96 / 78%);
`
export const ListItems = styled.li`
    width: 48px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`