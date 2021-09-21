import './App.css';
import Header from './components/Header';
import Filter from './components/Filter'
import Jobs from './components/jobs/Jobs';

function App() {
  return <div className='App'>
    <Header />
    <Filter/>
    <Jobs />
  </div>;
}

export default App;
