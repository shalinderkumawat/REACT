import React,{useState} from 'react'

const Cacluter = () => {
const [num , setNum1]= useState=(0);

    return (
    <div>
    {/* <p>this is ptage</p> */}
        <h1>Calculator</h1>
        
        {/* <button onClick={  () = > {setNum1(num+1)}}></button> */}

        <button onClick={() => setNum(num + 1)}>Increment</button>
        
    <button style={{color: 'yellow' , margin : '20px'}}  onClick={setNum1(num-1)}> Decrement</button>
    </div>
  )
}

export default Cacluter