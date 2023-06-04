import { useMemo, useState } from 'react'
import './App.css'

function App(){
 const [numbers ] = useState([2434,3344,9345,4556,8943,123,4453])
 const [list] = useState(['paras','singh','hello','there','adrian'])
 const total = useMemo(()=>numbers.reduce((acc, number)=>acc+number, 0), [numbers])
const sortName = useMemo(()=>[...list].sort(), [list])

 return (
  <>
  <div>Total:{total}</div>
  <div>sortName:{sortName.join(', ')}</div>
  </>
 )
}

export default App
