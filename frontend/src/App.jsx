import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [news,setNews] = useState([]);
  let newsobject={};
  function getData(){
    axios.get('http://localhost:5000/')
    .then((response) => {
      newsobject=response.data;
      setNews(newsobject.result);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    getData(); 
    console.log(news);
  },[]);
  
  return (
    <div className='bg-black h-full text-white flex-col text-center pt-10 '>
      <div className='text-5xl pb-10'>
      QUICK TECH NEWS BITES!
      </div>
      

      {news.map((newsitem,key)=>{
        return (
          <div className='pt-2'>
          <a key={key} href={newsitem.link} className='text-green-600 visited:text-purple-600'>{newsitem.title}</a>
          </div>
        )
      })}
    </div>
  )
}

export default App
