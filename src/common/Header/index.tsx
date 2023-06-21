import { Title, Wrapper } from "./styled";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);

export default Header;
