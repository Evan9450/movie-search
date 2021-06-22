import { Col, Form, FormControl, InputGroup, Navbar, Row } from 'react-bootstrap';
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

// import Form from 'bootstrap';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ handleSearch, handleType }) => {
  const [searchText, setSearchText] = useState('');
  const [value, setValue] = useState([1800, 2021]);
  const [types, setTypes] = useState('');
  console.log(types);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   console.log(value);

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
  //   console.log(value);

  const type = [
    {
      value: '',
      label: 'Any',
    },
    {
      value: 'movies',
      label: 'Movies',
    },
    {
      value: 'series',
      label: 'Series',
    },
    {
      value: 'episodes',
      label: 'Episodes',
    },
  ];
  //   console.log(type);

  return (
    <div>
      <div className="header" style={{ height: '100%', width: '100% !important' }}>
        <Row className="w-full">
          <Col className=" flex justify-content-center align-items-center" xs={12} lg={1} md={1}>
            <div className="brand">
              <span>Movies</span>
            </div>
          </Col>
          <Col xs={12} lg={4} md={4} className="flex justify-content-left align-items-center">
            <IconButton style={{ padding: '10px' }} aria-label="search">
              <SearchIcon className="color-white" onClick={e => handleSearch(searchText)} />
            </IconButton>
            <InputBase
              className="color-white w-full"
              //   style={{ color: 'white' }}
              onChange={e => setSearchText(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSearch(searchText)}
              placeholder="Search movies here"
              inputProps={{ 'aria-label': 'search movies' }}
            />
          </Col>
          <Col xs={12} lg={4} md={4} className="flex justify-content-center align-items-center">
            <Row className="w-full">
              <Row className="w-full mt-10 mb-10">
                <Typography style={{ color: 'white', paddingLeft: '0' }}>YEAR</Typography>
              </Row>
              <Row className="w-full">
                <Col xs={2} style={{ paddingLeft: '0' }}>
                  <p className="color-white font-14 mt-1">{value[0]}</p>{' '}
                </Col>
                <Col xs={8}>
                  <Slider
                    style={{ color: 'white', width: '100%' }}
                    //   orientation="vertical"
                    //   value={value}
                    defaultValue={[1800, 2021]}
                    min={1800}
                    step={1}
                    max={2021}
                    scale={x => 1800 < x < 2021}
                    onChange={handleChange}
                    // valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                    // getAriaValueText={valuetext}
                    marks={marks}
                  />
                </Col>

                <Col xs={2}>
                  <p className="color-white font-14 mt-1">{value[1]}</p>
                </Col>
              </Row>
            </Row>
          </Col>
          <Col xs={12} lg={3} md={3}>
            <Row className="w-full">
              <Row className="w-full mt-10 mb-10">
                <Typography className="mt-10 mb-10" style={{ color: 'white' }}>
                  TYPE
                </Typography>
              </Row>
              <Row className="w-full">
                <Form>
                  {type.map((item, index) => (
                    <Form.Check
                      type="radio"
                      className="color-white form-check-inline font-14 "
                      label={item.label}
                      onClick={() => handleSearch(searchText, item.value)}
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                  ))}
                </Form>
                {/* <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  <FormControlLabel
                    value="Any"
                    className="color-white"
                    control={<Radio className="color-white" />}
                    label="Any"
                  />
                  <FormControlLabel
                    value="Movies"
                    className="color-white"
                    control={<Radio className="color-white" />}
                    label="Movies"
                  />
                  <FormControlLabel
                    value="Series"
                    className="color-white"
                    control={<Radio size="small" className="color-white" />}
                    label="Series"
                  />
                  <FormControlLabel
                    value="Episodes"
                    className="color-white"
                    control={<Radio className="color-white" />}
                    label="Episodes"
                  />
                </RadioGroup> */}
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
