import { jsx as _jsx } from "react/jsx-runtime";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);
    const onInputChange = (event) => {
        const searchParams = new URLSearchParams(location.search);
        if (event.target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        }
        else {
            searchParams.set(searchQueryParamName, event.target.value);
        }
        history.push(`${location.pathname}? ${searchParams.toString()}`);
    };
    return (_jsx(Wrapper, { children: _jsx(Input, { placeholder: "Filtruj zadania", value: query || "", onChange: onInputChange }) }));
};
