import './RouterApp.css';
import { Routes, Route } from 'react-router';
import HomePage from './Pages/Home/Home';




function RouterApp() {
  return (
    <div className="RouterApp">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default RouterApp;
