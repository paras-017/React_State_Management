
import './App.css'
import { useReducer } from 'react'


function UserForm(){
  const [state, dispatch] = useReducer((state, action)=>({
    ...state, ...action
  }),{
    first:'',
    last:''
  })

  return(
    <>
    <input type="text" value = {state.first} onChange={e=>dispatch({first:e.target.value})}/>
    <input type="text" value = {state.last} onChange={e=>dispatch({last:e.target.value})}/>
    <div>
    <div>first:{state.first}</div>
    <div>first:{state.first}</div>
    </div>
    </>
  )
}

function Form(){
  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case 'Set_Name': return {...state, name: action.payload}
      case 'Add_Name': return {...state, names: [...state.names,state.name], name:'',}
    }
  }, {names:['jac', 'john','jill'],name:""})
  
    return (
      <>
      <ul>
        { state.names.map((name, index)=>(
          <li key={index}>{name}</li>
        ))}
      </ul>
        <input type="text" value={state.name} onChange={e=>dispatch({type:'Set_Name' ,payload:(e.target.value)})}/>
        <button onClick={()=>dispatch({type:'Add_Name'})}>submit</button>
      </>
    )
}

function App() {
return (
  <>
  {/* <Form/> */}
  <UserForm/>
  </>
)
}

export default App
