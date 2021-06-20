import 'bootstrap/dist/css/bootstrap.min.css';
// import { GlobalStyle } from './globalStyle';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <div>
      {/* <GlobalStyle /> */}
      <Router>
        <Header />
      </Router>

      <h1>Movie Search</h1>
    </div>
  );
}

export default App;
