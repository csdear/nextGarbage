import React, {FC, useEffect, useState} from 'react';

interface LoadThemDatasProps {
    inputSearch: string,
}

// const BareBones: FC = () => {
const LoadThemDatas: FC<LoadThemDatasProps> = ( { inputSearch }) => {

  // const [data, setData] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const loadAsyncData = async () => {

    setIsLoading(true);
    setError(null);

    try {
      // const resp = await fetch('https://...').then(r=>r.json());
      // const resp = await fetch(`https://api.github.com/users/${inputSearch}`).then(r=>r.json());
      const resp = await fetch(`https://api.github.com/users/${inputSearch}`).then(r=>r.json());
      console.log('response! ', resp);
      // console.log('response2! ', JSON.stringify(resp, null, 4));
      setData(resp);
      setIsLoading(false);
    } catch(e) {
      setError(e);
      setIsLoading(false);
    }

  }

  useEffect(() => {
    loadAsyncData();
  }, []);

// https://www.pluralsight.com/guides/how-to-use-reactjs-and-complex-json-objects
  if(isLoading) return (<p>Loading...</p>);
  if(error) return (<p>Something went wrong</p>);
  if(data) return ({data});  // <--- Error: Objects are not valid as a React child (found: object with keys {data}). If you meant to render a collection of children, use an array instead.

  {data && data.map((x, index) => (
    <p key={index}>{index} {x}</p>
  ))}

  //   {data && data.map((x, index) => (
//     <p key={index}>{index} {x.email}</p>
//   ))}
  return (<p>No data yet</p>);

}

export default LoadThemDatas;