
import { useReducer } from 'react'
import './App.css'

function UserForm() {
const [state, dispatch] = useReducer((state,action)=>({
  ...state,...action     //we are combining state with whatever comes on the action
}),{
      first:'',
      last:''
    })

  return(
    <>
    <input type="text" value= {state.first} onChange={e=>dispatch({first:e.target.value})}/>
    <input type="text" value= {state.last} onChange={e=>dispatch({last:e.target.value})}/>
    <div>
         <div>first:{state.first}</div>
    <div>last:{state.last}</div>
    </div>
    </>
  )
}

function NameList() {
const [state, dispatch] = useReducer((state, action)=>{
  switch(action.type){
    case "SET_NAME": return {...state, name:action.payload}
    case "ADD_NAME": return {...state, names:[...state.names,state.name],name:'',}
  }
},{names:[],name:''})

  return (
    <>
    <ul>
      { state.names.map((name, index)=>(
        <li key={index}>{name}</li>
      ))}
    </ul>
      <input type="text" value={state.name} onChange={e=>dispatch({type:"SET_NAME", payload:e.target.value})}/>
      <button onClick={()=>dispatch({type:"ADD_NAME"})}>Add Name</button>
     
      <div>name: {state.name}</div>
    </>
  )
}


function App(){
  return(
    <>
    <UserForm/>
      <NameList/>
    </>
  )
}
export default App
