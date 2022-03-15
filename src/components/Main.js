import { Col, Container, Row } from 'react-bootstrap';
import { FilterByType, FilterByYear, FilterByYearType, SearchByID, SearchByTitle, getMorePage } from '../data/Api';
import { Header, MovieDetail, MovieList } from '.';
import React, { useEffect, useState } from 'react';
import { addToWatchlist, removeFromWatchlist } from './store/actions';

import { connect } from 'react-redux';

const Main = ({ movies, addToWatchlist, removeFromWatchlist }) => {
	const [list, setList] = useState([]);
	const [results, setResults] = useState('');
	const [detail, setDetail] = useState([]);
	const [search, setSearch] = useState('');
	const [year, setYear] = useState([]);
	const [filtered, setFilterList] = useState([]);
	const [page, setPage] = useState(1);
	const [watchlist, setWatchlist] = useState([]);

	//handle search by title and by title & type
	const handleSearch = async (title, type) => {
		setSearch(title);

		if (title && type.value == 'All') {
			const data = await SearchByTitle(title);
			setList(data.data.Search);
			setResults(data.data.totalResults);
		}
		if (type.value != 'All' && title) {
			const t = await FilterByType(title, type.value);
			setList(t.data.Search);
			setResults(t.data.totalResults);
		}
	};

	//show movie detail
	const handleClick = async (id) => {
		const data = await SearchByID(id);
		setDetail([data.data]);
	};

	//filter exist data by change year;
	const handleYearChange = (y) => {
		console.log('=> y', y);
		setYear(y);
		let filterList = [];
		if (list && list.length) {
			for (var i = 0; i < list.length; i++) {
				if (list[i] && list[i].Year >= year[0] && list[i].Year <= year[1]) {
					filterList.push(list[i]);
				}
			}
		}

		setFilterList(filterList);
	};

	//get more data
	const handleLoadMore = async (title, page) => {
		const data = await getMorePage(title, page + 1);
		setPage(page + 1);
		setList(list.concat(data.data.Search));
	};

	return (
		<div className='vh-100'>
			<Header handleSearch={handleSearch} handleYearChange={handleYearChange} movies={movies} />
			{list && results ? (
				<Container fluid className='ml-12 mr-12'>
					<Row>
						<Col lg={4} md={4} xs={12} className='p-0 mt-3 shadow'>
							<MovieList
								page={page}
								search={search}
								List={list}
								filtered={filtered}
								results={results}
								handleClick={handleClick}
								handleLoadMore={handleLoadMore}
							/>
						</Col>
						<Col lg={8} md={8} xs={12} className='p-0 mt-3 shadow '>
							<MovieDetail
								detail={detail}
								watchlist={watchlist}
								addToWatchlist={addToWatchlist}
								removeFromWatchlist={removeFromWatchlist}
								movies={movies}
							/>
						</Col>
					</Row>
				</Container>
			) : (
				<Container className='d-flex justify-content-center align-items-center        '>
					<Row>
						<h1>Movie not found!</h1>
					</Row>
				</Container>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies,
});

export default connect(mapStateToProps, {
	addToWatchlist,
	removeFromWatchlist,
})(Main);
