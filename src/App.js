import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Create from './create';
import Edit from './edit';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
