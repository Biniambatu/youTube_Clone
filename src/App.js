import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import SideBar from './SideBar';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (

    <div className="App">
    
         <Routes>
          <Route path='/search' element={<SearchPage/>}> 
           {/* <Header/> */}
           {/* <h1>Search page</h1> */}
           </Route>
           <Route path=''></Route>
           {/* <Route path='/' element={ } /> */}
          <Route path='/'> 
          {/* <Header/>  */}
           <div className='app__page'>
            <SideBar />
            <RecommendedVideos /> 
           </div>
          </Route>
        </Routes>
     
    </div>
  );
}

export default App;
