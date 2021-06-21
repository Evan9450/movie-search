import React, { useEfffect, useState } from 'react';

import { NavItem } from 'react-bootstrap';
import { useEffect } from 'react';

const MovieDetail = ({ detail }) => {
  //   const [movieDetail, setMovieDetail] = useState([]);

  //   useEffect(() => {
  //     setMovieDetail(detail);
  //   }, []);
  //   console.log(detail.Title);
  console.log(detail);
  console.log(detail.length);

  return (
    <div className="main-right">
      {detail.length > 0 &&
        detail.map((item, index) => (
          <div>
            <div>
              <img src={item.Poster} alt="" />
              <p>{item.Title}</p>
              <p>
                <span>{item.Rated}</span> <span>{item.Year}</span> {'.'}
                <span>{item.Genre}</span>
                {'.'}
                <span>{item.Runtime}</span>
              </p>
              <p>{item.Actors}</p>
            </div>
            <div>
              <p>{item.Plot}</p>
            </div>
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
