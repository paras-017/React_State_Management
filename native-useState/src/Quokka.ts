function getState(){
    let value = 42
    return [value] 
}
let [myValue] = getState()
myValue;
myValue = 52
myValue

let [myValueAgain] = getState()
myValueAgain;    //And now my value again, is still 42.  Because setting the value of a return, just sets  your local copy. So scalars [strings, numbers, booleans]. So a number in  this case, are returned and passed by value, where  arrays and objects are passed and returned by reference. And there's a huge difference there.  So when you're returning something by value,  you don't get it, you get a copy of it, which  is not the same thing