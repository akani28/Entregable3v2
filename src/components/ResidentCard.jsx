import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentLocation}) => {
    const [resident, setResident] = useState(null)
    useEffect(()=>{
        axios
        .get(residentLocation)
        .then(({data})=>{
          setResident(data)
          console.log(data)
        })
        .catch((err)=>console.log(err))
      
    }, [])
  return (
    <div className='text-white flex flex-wrap justify-center items-center'>
        <section className='p-2'>
            <div>
                <img src={resident?.image} alt="" />
            </div>
            <div>
                <span>status:{resident?.status}</span>
            </div>
            <div>
                <h3>{resident?.name}</h3>
            </div>
        </section>
    </div>
  )
}

export default ResidentCard