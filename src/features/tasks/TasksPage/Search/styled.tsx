import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;
  border: 1px;

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
