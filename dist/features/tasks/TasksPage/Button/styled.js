import styled, { css } from "styled-components";
export const Button = styled.button `
        background-color: transparent;
        color: hsl(180, 100%, 25%);
        border: none; 
        margin: 0 0 0 20px;
        transition: 0.3s;

        &&:hover{
           filter: brightness(110%);
        }

        ${({ disabled }) => disabled && css `
            color: #ccc;
        `}

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;
