import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import AllRoute from './AllRoute';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import SideBar from './SideBar';
// import { Routes, Route, Link } from "react-router-dom";
  function App() {
    return (

          <div className="App">
            <Header/> 
            <div className='app__page'> 
            <SideBar />
              <Router>
                <Routes>
                  <Route path='/' element={<RecommendedVideos /> }/>
                  <Route path='/search' element={<SearchPage/>}/>
                </Routes>
              </Router>
          </div>
      </div>
   
       
   
  );
}

export default App;
