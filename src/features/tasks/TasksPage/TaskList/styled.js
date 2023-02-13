import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
margin: 0;
    padding: 20px;
    list-style: none;
    background-color: white;
    `;

export const Item = styled.li`
    display: grid;
    color: black;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    padding-left: 0;

    ${({ hidden }) => hidden && css`
        display: none;
        `}
    `;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: white;
    text-decoration: none;
    transition: 1s;
    `;

export const ToggleDoneButton = styled(Button)`
    background-color: hsl(120, 80%, 35%);
        transition: 0.5s;
        color: white;

        &&:hover{
        background-color: hsl(120, 80%, 50%);
        }
    `;

export const ToggleRemoveButton = styled(Button)`
        background-color: hsl(0, 100%, 40%);
        color: white;

        &&:hover {
            background-color: hsl(0, 100%, 60%);
            color: white;
        } 
`;

export const StyledLink = styled(NavLink)`
text-decoration: none;
color: black;

&:hover{
    border-bottom:solid 1px;
}
`;