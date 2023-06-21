import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { toAuthor, toTasks } from "../routers";
import { Item, List, StyledNavLink } from "./styled";
export default () => {
    return (_jsx("nav", { children: _jsxs(List, { children: [_jsx(Item, { children: _jsx(StyledNavLink, Object.assign({ to: toTasks }, { children: "Zadania" })) }), _jsx(Item, { children: _jsx(StyledNavLink, Object.assign({ to: toAuthor }, { children: "Autor" })) })] }) }));
};
