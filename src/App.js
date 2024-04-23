import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Meal from './Components/Meal/Meal';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/tasty-bites' element={<Home/>}/>
    <Route path='meal/:mealId' element={<Meal/>}/>
  </Routes>
</>
}

export default App;
