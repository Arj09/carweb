import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Card } from './Component/CardBox';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { CarDetail } from './Component/CarDetail';
import { UserContextProvider } from './Component/Context/ContextProvider';
function App() {
  return (
   <UserContextProvider>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route index  element={<Card/>} />
    <Route path='detail'  element={<CarDetail/>} />
   </Routes>
   
   
   </BrowserRouter>
   </UserContextProvider>
  );
}

export default App;
