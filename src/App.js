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
  

  const [selectedBtn, setSelectedBtn] = useState([]);

  
  const getData = async () =>{
    const data = await fetch('./data.json');

    const jobs = await data.json();

    setJobs(jobs);
  }

  const click = (e) =>{
    let btn = e.target.textContent

    setSelectedBtn(oldBtn =>[...oldBtn, btn])
  }

  const removeBtn = (e) =>{
    let btn = e.target.parentElement.parentElement.textContent
    setSelectedBtn(selectedBtn.filter((selectBtn)=> selectBtn !== btn))
  }

  const clearAllBtns = (e)=>{
    setSelectedBtn([])
  }
  
  return <div className='App'>
    <Header />
    <main>
      <Filter removeBtn= {removeBtn} selectedBtn = {Array.from(new Set(selectedBtn))} clearAllBtns = {clearAllBtns}/>
      <Jobs jobs = {jobs} click = {click} />
    </main>
  </div>;
}

export default App;
