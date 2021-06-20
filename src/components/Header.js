import { Col, Container, FormControl, InputGroup, Navbar, Row } from 'react-bootstrap';
import { IconButton, InputBase, Slider, TextField, Typography } from '@material-ui/core';
// import { Brand, HeaderWrapper, SearchSection, SearchWrapper } from './style';
import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { SearchByTitle } from '../data/Api';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  const YearSlider = withStyles({
    root: {
      color: '#b6b6b6',
      height: 3,
      padding: '13px 0',
    },

    active: {},
    track: {
      height: 6,
    },
    rail: {
      color: '#ffffff',
      opacity: 1,
      height: 3,
    },
  })(Slider);

  useEffect(() => {
    // const title = 'star';
    const handleSearch = async () => {
      const data = await SearchByTitle('star');
      console.log(data);
    };
    handleSearch();
  }, []);

  return (
    <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ height: '80px' }}>
        <Row className="w-full">
          <Col
            className="brand flex justify-content-center align-items-center"
            xs={12}
            lg={2}
            md={2}>
            <Navbar.Brand>
              <span>Movies</span>
            </Navbar.Brand>
          </Col>
          <Col xs={12} lg={6} md={6} className="flex justify-content-center align-items-center">
            <IconButton type="submit" style={{ padding: '10px' }} aria-label="search">
              <SearchIcon className="color-white" />
            </IconButton>
            <InputBase
              className="color-white"
              //   style={{ color: 'white' }}
              placeholder="Search movies here"
              inputProps={{ 'aria-label': 'search movies' }}
            />
          </Col>
          <Col xs={12} lg={4} md={4} className="flex justify-content-center align-items-center">
            <Typography gutterBottom style={{ color: 'white' }}>
              YEAR
            </Typography>
            <YearSlider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default Header;
