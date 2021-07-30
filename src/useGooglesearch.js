import { useState, useEffect } from "react";
import API_KEY from "./keys";

//creating custom hooks

const search_engine_key = "6589df2d95dd891cb";

const useGooglesearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${search_engine_key}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchdata();
  }, [term]);

  return { data };
};

export default useGooglesearch;
