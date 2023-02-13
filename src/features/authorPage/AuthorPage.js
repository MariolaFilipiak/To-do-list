import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"
import { AuthorStyled } from "./styled";

export default () => (
    <Container>
      <Header title="Autor" />
      <Section
        title="O mnie"
        body={
        
            <AuthorStyled> Cześć !<br/>
            Nazywam się Mariola. Moją pasją jest fotografia, a w polnych chwilach uczę się programować :)<br/> Nie wiem co więcej o sobie napisać lalalalalala ;)  </AuthorStyled>
        }
        />
        </Container>
);