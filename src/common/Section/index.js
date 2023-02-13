import { Wrapper, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent, optionalContent }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
      {optionalContent}
      {}
    </Header>
    {body}
  </Wrapper>
);

export default Section;