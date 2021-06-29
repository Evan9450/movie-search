import { Col, Container, Row } from 'react-bootstrap';
import React, { useEfffect, useState } from 'react';

import { NavItem } from 'react-bootstrap';
import { useEffect } from 'react';

const MovieDetail = ({ detail, addToWatchlist, removeFromWatchlist, movies }) => {
  console.log('movies', movies);
  const handleClick = item => {
    if (!movies.includes(item)) {
      addToWatchlist(item);
    }
    if (movies.includes(item)) {
      removeFromWatchlist(item);
    }
  };
  return (
    <div className="main-right">
      {detail.length > 0 &&
        detail.map((item, index) => (
          <Row>
            <Col lg={3} sm={6} md={6} xs={12}>
              <img className="detail-poster" src={item.Poster} alt="" />
            </Col>
            <Col lg={9} sm={6} md={6} xs={12}>
              <div
                className="watchlist"
                style={{ backgroundColor: movies.includes(item) ? '#ff0000' : '' }}>
                <div onClick={() => handleClick(item)}>
                  <svg
                    style={{ marginRight: '10px' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bookmark"
                    viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  </svg>
                  Watchlist
                </div>
              </div>
              <div className="detail-title">
                <h1>{item.Title}</h1>
                <p className="secindary-text">
                  <p className="pg">{item.Rated}</p> {item.Year + ' · '}
                  {item.Genre}
                  {' · ' + item.Runtime}
                </p>
                <p>{item.Actors}</p>
              </div>
            </Col>
            <Row className="layer-2 mt-10">
              <hr />
              <span className="plot mb-10">{item.Plot}</span>
              <hr />
            </Row>

            <Row>
              <div className="flex w-full">
                {item.Ratings.map((ratings, index) => (
                  <div
                    className="ratings w-full justify-content-center align-tiems-center"
                    // style={{ display: 'inline-grid' }}
                  >
                    <tr>
                      <td className="flex justify-content-center align-tiems-center  w-full">
                        <span className="rating-font">{ratings.Value}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="flex justify-content-center align-tiems-center  w-full">
                        <span className="rating-font flex justify-content-center align-tiems-center">
                          {ratings.Source}
                        </span>
                      </td>
                    </tr>
                  </div>
                ))}
              </div>
            </Row>
          </Row>
        ))}
    </div>
  );
};

export default MovieDetail;
