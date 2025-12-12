import {useState } from "react";

function CounterApp(){
      const[count,setcount]=useState(0);

      const btn ={
    border :"1px solid black",
    borderRadius :"20px",
    fontSize : "20px",
    padding :"10px",
    }

      return(
      <div style={{textAlign:"center"}}>
        <h1>Counter = {count}</h1>
        <button onClick={()=>setcount(count+1)} style={btn} >Increment +</button>
        <button onClick={()=>setcount(count-1)}  style={btn}>Decrement -</button>
      </div>
    );
}


 export default CounterApp;