
import React, { FC } from "react";
import useAxios from 'axios-hooks';

interface LoadThemDatasProps {
     inputSearch: string,
 }


const LoadThemDatas: FC<LoadThemDatasProps> = ( { inputSearch }) => {
    const [{ data, loading, error }, refetch] = useAxios(`https://api.github.com/users/${inputSearch}`);

    if (loading) return <p>Loading...</p>;
    // You can  do the Error here, and not render the subsequent return block
    // OR use the alternative if && below to render within the render block.
    // if (error) return <p>Error!</p>;

    return <div>
                An Axios-Hooks API Response : {JSON.stringify(data)}
                {error && (
                     <h1>An error occured</h1>
                 )}
                 {/* <button onClick={refetch}>Refetch?</button> */}
                 <button onClick={() => refetch()}>Refetch?</button>
            </div>;
  }

export default LoadThemDatas;