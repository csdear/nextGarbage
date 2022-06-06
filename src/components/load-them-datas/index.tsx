// import React, {FC, useEffect, useState} from 'react';
import React, { FC, useEffect, useState } from "react";
import axios from "axios";

interface LoadThemDatasProps {
     inputSearch: string,
 }


const LoadThemDatas: FC<LoadThemDatasProps> = ( { inputSearch }) => {
    const [data, setData] = useState([]);

    const getData = async () => {
      // const { data } = await axios.get(`https://yesno.wtf/api`); // simple yes/no api test
      const { data } = await axios.get(`https://api.github.com/users/${inputSearch}`); // my githup account
      setData(data);
    };

    useEffect(() => {
      getData();
    }, []);

    return <div>An Axios API Response : {JSON.stringify(data)}</div>;
  }

export default LoadThemDatas;