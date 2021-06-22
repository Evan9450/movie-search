import 'bootstrap/dist/css/bootstrap.min.css';
// import { GlobalStyle } from './globalStyle';
import './App.css';

import { Header, Main } from './components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <GlobalStyle /> */}
      {/* <div className="container"> */}
      <Router>
        <Main />
      </Router>
      {/* </div> */}
    </div>
  );
}

export default App;
