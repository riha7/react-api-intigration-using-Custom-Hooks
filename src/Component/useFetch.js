import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useFetch = (url) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios(url)
      .then((res) => {
        setdata(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return data;
};
export default useFetch;
