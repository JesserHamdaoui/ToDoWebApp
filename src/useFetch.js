import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("faild to fetch data from given server");
          }
          return res.json();
        })
        .then((jsonData) => {
          setDataArr(jsonData);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);
  return { dataArr, error, isLoading };
};

export default useFetch;
