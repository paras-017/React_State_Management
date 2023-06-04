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
const addOne=()=>setCount(++count)

const sortFunc = useCallback((a,b)=>a.localeCompare(b),[])
// *********Using  useCallback**************
//   useCallbackIn this case our dependency array   is empty. Because we're not actually using any  data that's in this function. We're not using  total or names or count or any of that this  is just a simple stock comparison function,  we just want to make sure that that reference  remains the same over time. So we're just going to   use an empty dependency array there. That way we  only ever create sort func once. Let's hit save.  Try it again. Hit a bunch counts. And there  we go. Now we have a stabilized version of  our source function. And we will only ever call  sorted list appropriately if the list changes  or the search function changes. But we're  not going to rerun it on every single go.   So that's why use callbacks important. 


// *********When to use useCallback**************
// use callback if the callback you're creating  like unclick or the unchanged or whatever is  going on to a nested component has a property.  So in this case, we're passing sword function  as a property to the sorted list. And you  don't know the internals of sorted list.  Maybe it depends on that sword function. And if  that sword function reference changes, it's going  to go and update. So make sure that you stabilize  references that you send to a React component. If  you're just using a simple HTML element like  input, you don't need to use use callback for  something like onchange. It's overkill. The other  time that you want to use use callback is if you  are creating a custom hook, which we'll get to in  just a bit. Anytime that you create a callback in  a custom hook, you want to make sure that you use  use callback to do that because you have no idea  what the component that's going to use that hook  is going to do with that callback. And you want to  make sure that the reference to that callback is  absolutely stable over time. 


// const sortFunc = (a,b)=>a.localeCompare(b)
// *********What happens when we don't  use useCallback**************
// if we don't use useCallback, it will run every  time that we rerun app, which is every time we  click that button, because we set the state, the  state then says, you need in queue a rerender,  of the app component, that then reruns this  whole component all the way down the line.  And we create a sortFunc function. And  then we pass it on to our sorted list.  And now the sortFunc function is the  same implementation each time,  we're not changing the implementation. But we are  changing the reference every time. We're creating  a new function every time that we go through this.we have 2 solutions. 1st->  create sortFunc outside App component . 

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
