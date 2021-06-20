import 'bootstrap/dist/css/bootstrap.min.css';
// import { GlobalStyle } from './globalStyle';
import './App.css';

import { Header, MovieDetail, MovieList } from './components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <GlobalStyle /> */}
      <Router>
        <Header />
        <MovieList />
        <MovieDetail />
      </Router>
    </div>
  );
}

export default App;
