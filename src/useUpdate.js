import { useEffect } from "react";

const useUpdate = (url, updatedData, setDataArr, setError, setIsLoading) => {
  useEffect(() => {
    setTimeout(() => {
      updatedData.done = !updatedData.done;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
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
  }, [url, updatedData, setDataArr, setError, setIsLoading]);
};

export default useUpdate;
