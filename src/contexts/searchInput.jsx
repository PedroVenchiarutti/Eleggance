

import React from "react";
export const InputSearch = React.createContext({});

export const inputSearchProvider = (props) => {
  var busca = "Brilho";

  const [data1, setData1] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api-elegancce.herokuapp.com/api/public/search/${busca}`)
      .then((response) => {
        console.log(response.data);
        setData1(response.data);
      });
  }, [busca]);

  return (
    <InputSearch.Provider value={[data1]}>
      {props.children}
    </InputSearch.Provider>
  );
};
