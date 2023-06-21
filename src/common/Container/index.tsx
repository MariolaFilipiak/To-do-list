import { Wrapper } from "./styled";

const Container = ({children}: { children: React.ReactNode }) => (
    <Wrapper className="container">
        {children}
    </Wrapper>
);

export default Container;