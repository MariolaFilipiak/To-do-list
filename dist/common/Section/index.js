import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Wrapper, Header, Title } from "./styled";
const Section = ({ title, body, extraHeaderContent, optionalContent, }) => (_jsxs(Wrapper, { children: [_jsxs(Header, { children: [_jsx(Title, { children: title }), extraHeaderContent, optionalContent] }), body] }));
export default Section;
