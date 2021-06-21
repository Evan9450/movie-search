import { MovieDetail, MovieList } from '.';
import React, { useEffect, useState } from 'react';
import { SearchByID, SearchByTitle } from '../data/Api';

const Main = () => {
  const [list, setList] = useState([]);
  const [results, setResults] = useState('');
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    // const title = 'star';
    const handleSearch = async () => {
      const data = await SearchByTitle('star wars');
      console.log(data);
      setList(data.data.Search);
      setResults(data.data.totalResults);
    };
    handleSearch();
  }, []);

  const handleClick = async id => {
    const data = await SearchByID(id);
    // console.log(data);
    setDetail([data.data]);
  };

  console.log(detail);

  return (
    <div>
      <MovieList List={list} results={results} handleClick={handleClick} />
      <MovieDetail detail={detail} />
    </div>
  );
};

export default Main;
