
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Rows from './components/Rows';
import requests from './request';

function App() {
  return (
  <div className='app'>
    <Nav />
    <Banner />
    <Rows title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Rows title="Trending Now" fetchURL={requests.fetchTrending}/>
    <Rows title="Top Rated" fetchURL={requests.fetchTopRated}/>
    <Rows title="Action Movies" fetchURL={requests.fetchActionMovies}/>
    <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
    <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
    <Rows title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
    <Rows title="Documantaries" fetchURL={requests.fetchDocumantaries}/>
  </div>
  );
}

export default App;
