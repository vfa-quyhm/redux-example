import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Form /> 
        </div>
    </Provider>

  );
}

export default App;
