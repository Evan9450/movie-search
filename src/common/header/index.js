import { HeaderWrapper, SearchSection, SearchWrapper } from './style';
import React, { useEffect, useState } from 'react';

import { SearchByTitle } from '../../API';

const Header = () => {
  //   const [title, setTitle] = useState('star');
  useEffect(() => {
    // const title = 'star';
    const handleSearch = async () => {
      const data = await SearchByTitle('star');
      console.log(data);
    };
    handleSearch();
  }, []);

  return (
    <HeaderWrapper>
      <SearchWrapper>
        <SearchSection />
      </SearchWrapper>
    </HeaderWrapper>
  );
};

export default Header;
