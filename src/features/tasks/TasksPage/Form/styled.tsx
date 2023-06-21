import styled from "styled-components";

export const StyledForm = styled.form`
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

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  flex-basis: 100%;
  max-width: 1000px;

  @media (max-width: 768px) {
    margin: 5px;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  border: none;
  transition: 0.5s;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px;
  }

  &&:hover {
    background: hsl(180, 100%, 35%);
    transform: scale(1.1);
  }
`;
