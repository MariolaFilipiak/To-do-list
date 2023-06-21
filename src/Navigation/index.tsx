import { toAuthor, toTasks } from "../routers";
import { Item, List, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor}>Autor</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
