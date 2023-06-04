import { useCallback, useMemo, useState } from 'react'
import './App.css'

function SortList({list, sortFunc}){
    console.log('SortList render');
    const sortedList = useMemo(()=>{
        console.log('running');
       return [...list].sort(sortFunc)
    }, [list, sortFunc])
    return (
        <div>
            {sortedList.join(', ')}
        </div>
    )
}

function App(){
 const [numbers ] = useState([2434,3344,9345,4556,8943,123,4453])
 const [names] = useState(['paras','singh','hello','there','adrian'])
 let [count, setCount] = useState(0)
const total = useMemo(()=>numbers.reduce((acc, number)=>acc+number, 0), [numbers])
const sortName = useMemo(()=>[...names].sort(), [names])
const sortFunc = useCallback((a,b)=>a.localeCompare(b),[])

const addOne=()=>setCount(++count)


 return (
    
  <>
  <div>Total:{total}</div>
  {/* <div>sortName:{sortName.join(', ')}</div> */}
    <SortList list={names} sortFunc={sortFunc}/>
    <button onClick={addOne}>count:{count}</button>
  </>
 )
}

export default App
