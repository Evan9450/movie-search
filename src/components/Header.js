import { Col, Container, FormControl, InputGroup, Navbar, Row } from 'react-bootstrap';
import {
  FormControlLabel,
  IconButton,
  InputBase,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
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
    <div>
      <div className="header" style={{ height: '100%', width: '100% !important' }}>
        <Row className="w-full">
          <Col className=" flex justify-content-center align-items-center" xs={12} lg={1} md={1}>
            <div className="brand">
              <span>Movies</span>
            </div>
          </Col>
          <Col xs={12} lg={3} md={3} className="flex justify-content-left align-items-center">
            <IconButton type="submit" style={{ padding: '10px' }} aria-label="search">
              <SearchIcon className="color-white" />
            </IconButton>
            <InputBase
              className="color-white w-full"
              //   style={{ color: 'white' }}
              placeholder="Search movies here"
              inputProps={{ 'aria-label': 'search movies' }}
            />
          </Col>
          <Col xs={12} lg={3} md={3} className="flex justify-content-center align-items-center">
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
          <Col xs={12} lg={5} md={5}>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
              <FormControlLabel
                value="end"
                className="color-white"
                control={<Radio className="color-white" />}
                label="Any"
              />
              <FormControlLabel
                value="end"
                className="color-white"
                control={<Radio className="color-white" />}
                label="Movies"
              />
              <FormControlLabel
                value="end"
                className="color-white"
                control={<Radio className="color-white" />}
                label="Series"
              />
              <FormControlLabel
                value="end"
                className="color-white"
                control={<Radio className="color-white" />}
                label="Episodes"
              />
            </RadioGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
