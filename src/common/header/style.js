import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  z-index: -1;
  position: relative;
  height: 100px;
  border-bottom: 1px solid #000000;
  background-color: #000000;
  width: 100%;
  top: 0px;
  display: flex;
  margin-top: 0px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
`;
export const SearchSection = styled.input.attrs({
  placeholder: 'search',
})`
  width: 400px;
  height: 60px;
  margin: 20px;
  border-radius: 10px;
  font-size: 25px;
  /* background-color: #000000; */
  border: none;
  &.focused {
    border-bottom: 1px splid #666;
  }
`;
