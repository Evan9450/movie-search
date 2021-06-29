import 'bootstrap/dist/css/bootstrap.min.css';
// import { GlobalStyle } from './globalStyle';
import './App.css';

import { Header, Main } from './components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      {/* <GlobalStyle /> */}
      {/* <div className="container"> */}
      <Provider store={store}>
        <Main />
      </Provider>
      {/* </div> */}
    </div>
  );
}

export default App;
