import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams(location.search);

    if (event.target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, event.target.value);
    }
    history.push(`${location.pathname}? ${searchParams.toString()}`);
  };
  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
