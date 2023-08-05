import { styled } from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    width: 240px;
    margin: 50px auto;
`

export const ListItem = styled.li`
    display: flex;
    gap: 10px;
    justify-content: left;
    flex-direction: row;
    align-items: center;
    border: 1px solid #bcbbbb;
    padding: 10px 16px;
    box-shadow: 0 3px 3px grey;
    background-color: white;
`