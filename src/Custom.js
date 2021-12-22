import React from 'react';
import useFetch from './Component/useFetch';
const Custom = () => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts/1');
  return (
    <div>
      {data?.title}
      <p>{data?.body}</p>
    </div>
  );
};
export default Custom;
