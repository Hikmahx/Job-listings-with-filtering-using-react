import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter'
import Jobs from './components/jobs/Jobs';

function App() {
  useEffect(() => {
    getData();
  }, []);
  
  const [jobs, setJobs] = useState([]);
  
  const getData = async () =>{
    const data = await fetch('./data.json');

    const jobs = await data.json();

    setJobs(jobs);
  }
  
  return <div className='App'>
    <Header />
    <main>
      <Filter/>
      <Jobs jobs = {jobs} />
    </main>
  </div>;
}

export default App;
