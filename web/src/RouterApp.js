import './RouterApp.css';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home/Home';




function RouterApp() {
  return (
    <div className="RouterApp">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default RouterApp;
