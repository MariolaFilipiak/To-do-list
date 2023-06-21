import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
  border: 1px solid #ddd;
  flex-basis: 100%;
  max-width: 1000px;

  @media (max-width: 768px) {
    margin: 5px;
    max-width: 100%;
  }
`;

export default Input;