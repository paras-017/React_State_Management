import './App.css'
import { useEffect, useState } from 'react'

const StopWatch = () => {
  const [time, setTime] = useState(0)

useEffect(()=>{
  const interval = setInterval(() => {
    setTime((t)=>{
    return t+1
    })
  }, 1000);
    return ()=>clearInterval(interval)
}, [])

  return(
    <>
    <div>Time: {time}</div>
    </>
  )
}

function App() {
  const [names, setNames] = useState([])
  // const [selectedName, setSelectedName] = useState(null)
  const [selectedNameDetails, setSelectedNameDetails] = useState(null)

  useEffect(()=>{ 
    fetch("/names.json")
    .then((response) => response.json())
    .then((data) => setNames(data))
  }  ,[])

  // useEffect(()=>{ 
  //   fetch(`/${selectedName}.json`)
  //   .then((response) => response.json())
  //   .then((data) => setSelectedNameDetails(data))
  // }  ,[selectedName])

  const onSelectedNameChange = (name)=>{
    fetch(`/${name}.json`)
    .then((response) => response.json())
    .then((data) => setSelectedNameDetails(data))
  }

  return(
    <>
    <StopWatch/>
    <div>
     <div>
      {names.map((name,id)=>(
        // <button key={id} onClick={()=>setSelectedName(name)}>{name}</button>
        <button key={id} onClick={()=>onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
     {/* <div>{selectedName}</div> */}
     <div>{JSON.stringify(selectedNameDetails)}</div>
      </div>

      
    </>
     )
}
export default App
