import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 0 auto;
`;

export const Header = styled.header`
    margin: 0 ;
    padding: 20px;
    background-color: white;
    border: 1px hwb(0 85% 15%);
    border-bottom: solid 1px hwb(0 85% 15%);
    display: grid;
    grid-template-columns: auto auto ;
    grid: gap 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
    }
    `;

export const Title = styled.h2`
        font-size: 20px;
        margin: 0;
    `;
