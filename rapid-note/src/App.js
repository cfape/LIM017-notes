
import './components/Home.css';
import Home  from  './components/Home.js'
import Button from './components/Button.js'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
