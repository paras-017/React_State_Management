import { useState } from 'react'
import './App.css'

function Counter() {
let  [count, setCount] = useState(10)
const addOne =()=>{
  // count++ // the increment operator increments and returns the value before incrementing.
  setCount(++count)   
}
  return (
    <>
   <div className="app">
    <button onClick={addOne}>count = {count}</button>
   </div>
    </>
  )
}
function NameList(){
  const [list, setList] = useState(['jack','john','jill'])
  const [name, setName] = useState('')
  const onAddName=()=>{
   setList([...list, name])
  }
  return(
    <>
    <ul>
      {list.map((name,id)=>(
        <li key={id}>{name}</li>
     ))}
    </ul>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={onAddName}>Add Name</button>
    </>
  )
}

function App(){
  return(
    <>
    <Counter/>
    <NameList/>
    </>
  )
}

export default App