import { Button, Col, Dropdown, DropdownButton, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { IconButton, InputBase, Slider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';

const Header = ({ handleSearch, handleYearChange, movies }) => {
	const [searchText, setSearchText] = useState('');
	const [value, setValue] = useState([1800, 2021]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		handleYearChange(value);
	};

	const marks = [
		{
			value: 1970,
			label: '1970',
		},
		{
			value: 2021,
			label: '2021',
		},
	];

	// deal with type
	const [type, setType] = useState('All');
	const typeOptions = [
		{
			value: '',
			label: 'All',
		},
		{
			value: 'movie',
			label: 'Movies',
		},
		{
			value: 'series',
			label: 'Series',
		},
		{
			value: 'episode',
			label: 'Episodes',
		},
	];

	return (
		<div>
			<div className='header' style={{ height: '100%', width: '100% !important' }}>
				<Row className='w-full'>
					<Col className=' flex justify-content-center align-items-center' xs={12} lg={1} md={1}>
						<div className='brand'>
							<span>Movie</span>
						</div>
					</Col>
					<Col xs={12} lg={5} md={5} className='flex justify-content-left align-items-center'>
						<InputGroup className='mb-3'>
							<DropdownButton
								variant='outline-secondary'
								// onClick={}
								title={type ? type : ''}
								id='input-group-dropdown-1'>
								{typeOptions.map((item, index) => (
									<Dropdown.Item onClick={() => setType(item.value)}>{item.label}</Dropdown.Item>
								))}
							</DropdownButton>
							<FormControl
								aria-label='Text input with dropdown button'
								onChange={(e) => setSearchText(e.target.value)}
								onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchText, type)}
							/>
							<IconButton style={{ padding: '10px' }} aria-label='search'>
								<SearchIcon className='color-white' onClick={(e) => handleSearch(searchText, type)} />
							</IconButton>
						</InputGroup>
					</Col>
					<Col xs={12} lg={5} md={5} className='flex justify-content-center align-items-center'>
						<Row className='w-full'>
							<Row className='w-full mt-10 mb-10'>
								<Typography style={{ color: 'white', paddingLeft: '0' }}>YEAR</Typography>
							</Row>
							<Row className='w-full'>
								<Col xs={2} style={{ paddingLeft: '0' }}>
									<p className='color-white font-14 mt-1'>{value[0]}</p>{' '}
								</Col>
								<Col xs={8}>
									<Slider
										className='w-full color-white'
										defaultValue={[1800, 2021]}
										min={1800}
										step={1}
										max={2021}
										scale={(x) => 1800 < x < 2021}
										onChange={handleChange}
										aria-labelledby='range-slider'
										marks={marks}
									/>
								</Col>
								<Col xs={2}>
									<p className='color-white font-14 mt-1'>{value[1]}</p>
								</Col>
							</Row>
						</Row>
					</Col>
					{/* <Col xs={12} lg={3} md={3}>
						<Row className='w-full'>
							<Row className='w-full mt-10 mb-10'>
								<Typography className='mt-10 mb-10' style={{ color: 'white' }}>
									TYPE
								</Typography>
							</Row>
							<Row className='w-full'>
								<Form>
									{typeOptions.map((item, index) => (
										<Form.Check
											type='radio'
											className='color-white form-check-inline font-14 '
											label={item.label}
											onClick={() => handleSearch(searchText, item.value)}
											name='formHorizontalRadios'
											id='formHorizontalRadios1'
										/>
									))}
								</Form>
							</Row>
						</Row>
					</Col> */}
				</Row>
			</div>
		</div>
	);
};

export default Header;
