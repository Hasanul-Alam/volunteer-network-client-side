import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Donations from './components/Donations/Donations';
import Events from './components/Events/Events';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import MyVolunteer from './components/MyVolunteer/MyVolunteer';
import AuthProvider from './components/context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/donations' element={<Donations />} />
            <Route path='/events' element={<Events />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register-volunteer/:id' element={<RegisterVolunteer />} />
            <Route path='/myVolunteer' element={<MyVolunteer />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


/*  */