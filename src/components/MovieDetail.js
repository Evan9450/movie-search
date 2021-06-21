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
          <div className="detail-container">
            <div className="layer-1">
              <img className="detail-poster" src={item.Poster} alt="" />
              <div className="watchlist">
                <div>Watchlist</div>
              </div>
              <div className="detail-title">
                <h1>{item.Title}</h1>
                <p className="secindary-text">
                  <p className="pg">{item.Rated}</p> {item.Year}
                  {item.Genre}
                  {item.Runtime}
                </p>
                <p>{item.Actors}</p>
              </div>
            </div>
            <hr />
            <div className="layer-2">
              <sapn className="plot">{item.Plot}</sapn>
            </div>
            <hr />
            <div className="flex ">
              {item.Ratings.map((ratings, index) => (
                <div>
                  <tr>
                    <td>{ratings.Value}</td>
                  </tr>
                  <tr>
                    <td>{ratings.Source}</td>
                  </tr>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieDetail;
