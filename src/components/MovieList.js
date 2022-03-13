import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const MovieList = ({ page, search, List, results, handleClick, filtered, handleLoadMore }) => {
	return (
		<div className='main-left'>
			<div className='results'>
				<span>{results + ' '}RESULTS </span>
			</div>
			{(filtered.length > 0 ? filtered : List).map((item, index) => (
				<Button
					className='d-flex list w-100'
					variant='light'
					key={index}
					onClick={() => handleClick(item.imdbID)}>
					<div className='d-flex flex-shrink-0 justify-content-center ' style={{ alignItems: 'center' }}>
						{/* <div className='poster'> */}
						<img className='pic' src={item.Poster} alt='' />
						{/* </div> */}
					</div>
					<div className='flex-grow-1 p-2' style={{ marginLeft: '4px' }}>
						<h6 className='d-flex text-left text-justify'>{item.Title}</h6>
						<p className='d-flex year text-left m-0'> {item.Year} </p>
					</div>
				</Button>
			))}
			<Button
				variant='light'
				className='load-more border-0 text-dark w-100 '
				onClick={() => handleLoadMore(search, page)}>
				More...
			</Button>
		</div>
	);
};

export default MovieList;
