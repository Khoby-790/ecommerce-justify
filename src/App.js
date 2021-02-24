import logo from './logo.svg';
import './App.css';
import Shop from './layout/Shop';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
}

export default App;
