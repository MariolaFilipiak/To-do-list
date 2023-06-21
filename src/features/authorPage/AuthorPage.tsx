import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { AuthorStyled } from "./styled";

export default () => (
  <Container>
    <Header title="Autor" />
    <Section
      title="O mnie"
      body={
        <AuthorStyled>
          Cześć! <br />Od roku intensywnie uczę się programowania. Teraz szukam swojej pierwszej pracy jako Frontend developer. Dobrze znam React, Redux, JS,TS, HTML i CSS. Na co dzień korzystam z GitHuba, ponadto znam podstawy UX/UII, dobrze czuję się w zespole i zależy mi na nauce nowych technologii
        </AuthorStyled>
      }
    />
  </Container>
);
