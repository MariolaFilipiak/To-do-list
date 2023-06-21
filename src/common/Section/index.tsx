import { ReactNode } from "react";
import { Wrapper, Header, Title } from "./styled";

interface SectionProps {
  title: string;
  body?: ReactNode;
  extraHeaderContent?: ReactNode;
  optionalContent?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  body,
  extraHeaderContent,
  optionalContent,
}) => (
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
