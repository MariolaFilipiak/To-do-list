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
            Nazywam się Mariola. Moją pasją jest fotografia, programowanie oraz projektowanie wnętrz.<br/>
            Na codzień matka i żona. Wciąż rozwijam nowe umiejętności i nie boję się nowych wyzwań :)
             </AuthorStyled>
        }
        />
        </Container>
);