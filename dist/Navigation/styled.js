import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledNavLink = styled(NavLink) `
  text-decoration: none;
  color: white;
  &.active {
    font-weight: bold;
  }
  &:hover {
    border-bottom: solid 1px;
  }
`;
export const List = styled.ul `
  background-color: hsl(180, 100%, 25%);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const Item = styled.li `
  margin: 20px;
`;
