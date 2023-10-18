
import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import axios from 'axios'
import { getRandomLocation } from './randomLocation'

function App() {
  const [location, setLocation] = useState(null)
  const getInformation=(url)=>{

    axios
  .get(url)
  .then(({data})=>{
    setLocation(data)
    console.log(data)
  })
  .catch((err)=>console.log(err))


  }
  const URL=`https://rickandmortyapi.com/api/location/${getRandomLocation()}`

useEffect(()=>{
 getInformation(URL)

}, [])
  
  

  return (
    <>
    <main className='bg-[#000000] p-4'>
    <Location location={location}/>
    </main>
   
    </>
  )
}

export default App
