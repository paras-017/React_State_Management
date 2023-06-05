import { useEffect, useRef ,useState} from 'react'
import './App.css'
// READ      README file

function App() {
  const inputRef = useRef(null)
  const idRef = useRef(1)
  const [names, setNames] = useState([
    {id:idRef.current, name:"Pery"},
  ])
  const onAddName = () => {
    setNames([...names, {id:idRef.current++, name: inputRef.current.value}])
    inputRef.current.value = ''
  }
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  return (
    <>
    
    {names.map((name, index)=>{
     return <div key={index}>{name.id}-{name.name}</div>
    })}
     <input type="text" ref={inputRef}/>
     <button onClick={onAddName}>Add</button>
    </>
  )
}

export default App
