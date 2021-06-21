import React, { useEffect, useState } from 'react';

const MovieList = ({ List, handleClick }) => {
  //   console.log(List);
  //   console.log(handleClick);
  return (
    <div className="main-left">
      {/* <ul> */}
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
      {/* </ul> */}
    </div>
  );
};

export default MovieList;
