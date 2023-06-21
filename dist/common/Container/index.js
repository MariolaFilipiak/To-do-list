import { jsx as _jsx } from "react/jsx-runtime";
import { Wrapper } from "./styled";
const Container = ({ children }) => (_jsx(Wrapper, Object.assign({ className: "container" }, { children: children })));
export default Container;
