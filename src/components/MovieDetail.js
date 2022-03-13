import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useEfffect, useState } from 'react';

import { useEffect } from 'react';

const MovieDetail = ({ detail, addToWatchlist, removeFromWatchlist, movies }) => {
	console.log('movies', movies);
	const handleClick = (item) => {
		if (!movies.includes(item)) {
			addToWatchlist(item);
		}
		if (movies.includes(item)) {
			removeFromWatchlist(item);
		}
	};
	return (
		<div className='main-right'>
			{detail.length > 0 &&
				detail.map((item, index) => (
					<Row className='p-2'>
						<Col
							lg={4}
							sm={6}
							md={6}
							xs={12}
							className='d-flex justify-content-center '
							style={{ alignItems: 'center' }}>
							<img className='detail-poster' src={item.Poster} alt='' />
						</Col>
						<Col lg={8} sm={6} md={6} xs={12}>
							<Row className='w-100 '>
								<Col className='d-flex justify-content-start m-4'>
									<Button
										className='mt-3 p-2 border'
										style={{ borderRadius: '5px' }}
										variant='outline'
										onClick={() => handleClick(item)}
										style={{ backgroundColor: movies.includes(item) ? '#ff0000' : '' }}>
										<svg
											style={{ marginRight: '10px' }}
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											class='bi bi-bookmark'
											viewBox='0 0 16 16'>
											<path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
										</svg>
										Watchlist
									</Button>
								</Col>
							</Row>
							<Row className='detail-title w-100 '>
								<Col className='m-4'>
									<h1>{item.Title}</h1>
									<p className='secindary-text'>
										<p className='pg'>{item.Rated}</p> {item.Year + ' · '}
										{item.Genre}
										{' · ' + item.Runtime}
									</p>
									<p>{item.Actors}</p>
								</Col>
							</Row>
						</Col>
						<Row className='d-flex w-100 layer-2 '>
							<Col className=' border-top border-bottom p-2' style={{ margin: '20px' }}>
								<span className='plot mb-10'>{item.Plot}</span>
							</Col>
						</Row>

						<Row className='d-flex w-full flex-row '>
							{item.Ratings.map((ratings, index) => (
								<Col className='p-1 m-4 border ' style={{ borderRadius: '10px' }}>
									<Row className='d-flex justify-content-center align-tiems-center p-2 m-2'>
										<span className='rating-font'>{ratings.Value}</span>
									</Row>
									<Row className='d-flex justify-content-center align-tiems-center  mb-2'>
										<span className='rating-font flex justify-content-center align-tiems-center'>
											{ratings.Source}
										</span>
									</Row>
								</Col>
							))}
						</Row>
					</Row>
				))}
		</div>
	);
};

export default MovieDetail;
