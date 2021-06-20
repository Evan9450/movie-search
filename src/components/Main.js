import { MovieDetail, MovieList } from '.';
import React, { useEffect, useState } from 'react';
import { SearchByID, SearchByTitle } from '../data/Api';

const Main = () => {
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    // const title = 'star';
    const handleSearch = async () => {
      const data = await SearchByTitle('star wars');
      console.log(data);
      setList(data.data.Search);
    };
    handleSearch();
  }, []);

  const handleClick = async id => {
    const data = await SearchByID(id);
    console.log(data);
    setDetail(data);
  };

  return (
    <div>
      <MovieList List={list} handleClick={handleClick} />
      <MovieDetail />
    </div>
  );
};

export default Main;
