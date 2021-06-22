import React, { useEffect, useState } from 'react';

const MovieList = ({ List, results, handleClick }) => {
  return (
    <div className="main-left">
      <div className="results">
        <span>{results + ' '}RESULTS </span>
      </div>
      {List.map((item, index) => (
        <div className="list" key={index} onClick={() => handleClick(item.imdbID)}>
          <div className="poster">
            <img className="pic" src={item.Poster} alt="" />
          </div>
          <div className="title">
            {item.Title}
            <br />
            <div className="year"> {item.Year} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
