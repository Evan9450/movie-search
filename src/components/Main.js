import { Col, Container, Row } from 'react-bootstrap';
import {
  FilterByType,
  FilterByYear,
  FilterByYearType,
  SearchByID,
  SearchByTitle,
} from '../data/Api';
import { Header, MovieDetail, MovieList } from '.';
import React, { useEffect, useState } from 'react';

const Main = () => {
  const [list, setList] = useState([]);
  const [results, setResults] = useState('');
  const [detail, setDetail] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = async (title, type) => {
    // setSearch(title);

    if (title && !type) {
      const data = await SearchByTitle(title);
      //   console.log(data);
      setList(data.data.Search);
      setResults(data.data.totalResults);
    }
    if (type && title) {
      const t = await FilterByType(title, type);
      setList(t.data.Search);
      setResults(t.data.totalResults);
    }
  };

  const handleClick = async id => {
    const data = await SearchByID(id);

    setDetail([data.data]);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        {list && results ? (
          <Row>
            <Col lg={4} md={4} xs={12}>
              <MovieList List={list} results={results} handleClick={handleClick} />
            </Col>
            <Col lg={8} md={8} xs={12}>
              <MovieDetail detail={detail} />
            </Col>
          </Row>
        ) : (
          <div className="flex justify-content-center align-tiems-center mt-10">
            <h1>Movie not found!</h1>
          </div>
        )}
      </Container>
    </>
  );
};

export default Main;
