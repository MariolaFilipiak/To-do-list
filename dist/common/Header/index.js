import { jsx as _jsx } from "react/jsx-runtime";
import { Title, Wrapper } from "./styled";
const Header = ({ title }) => (_jsx(Wrapper, { children: _jsx(Title, { children: title }) }));
export default Header;
