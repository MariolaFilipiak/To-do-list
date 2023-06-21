import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key:string): string | null => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  
  return ({ key, value }:{ key: string; value: string | undefined }) => {


    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push(`${location.pathname}> ${newSearch}`);
  };
};
