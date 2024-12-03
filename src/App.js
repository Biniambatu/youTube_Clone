import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app__page'>
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
