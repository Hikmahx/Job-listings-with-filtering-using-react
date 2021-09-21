import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/filter/Filter'
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

  const click = (e) =>{
    console.log(e.target.textContent)
  }
  
  return <div className='App'>
    <Header />
    <main>
      <Filter/>
      <Jobs jobs = {jobs} click = {click} />
    </main>
  </div>;
}

export default App;
