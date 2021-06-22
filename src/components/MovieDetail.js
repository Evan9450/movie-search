import { Col, Container, Row } from 'react-bootstrap';
import React, { useEfffect, useState } from 'react';

import { NavItem } from 'react-bootstrap';
import { useEffect } from 'react';

const MovieDetail = ({ detail }) => {
  console.log(detail);
  console.log(detail.length);

  return (
    <div className="main-right">
      {detail.length > 0 &&
        detail.map((item, index) => (
          <Row>
            <Col lg={3} sm={6} md={6} xs={12}>
              <img className="detail-poster" src={item.Poster} alt="" />
            </Col>
            <Col lg={9} sm={6} md={6} xs={12}>
              <div className="watchlist">
                <div>Watchlist</div>
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

      {/* <div className="detail-container w-full">
            <div className="layer-1">
              */}

      {/* <hr /> */}
    </div>
  );
};

export default MovieDetail;
