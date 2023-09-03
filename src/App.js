import React  ,{useState,useEffect,useRef,UseMemo} from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css"
export default function App() {
  let [num,setNum]=useState ("")
  let one=()
  =>setNum((value)=>value+=1+"")
  let two=()=>setNum((value)=>value+=2+"")
  let three=()=>setNum((value)=>value+=3+"")
  let l =num.length
  let erase=()=>{
    let newNum=num.slice (0,l-1)
    setNum(newNum)
  }
  return (
    <div className='container p-2'>
        <div className="text-center d-flex justify-content-center m-2">
        <input type="text" id="num" value={num} className="form-control w-25"
        onChange={(e)=>setNum(e.target.value)} disabled placeholder="100"/>
          
        </div>
      <div className="container d-flex justify-content-between text-white">
        <button className="btn btn-primary p-4 rounded" onClick={one}>
          1</button>
        <button className="btn btn-primary p-4" onClick={two}>2</button>
        <button className="btn 
        btn-primary p-4" onClick={three}>3</button>
      </div>  
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>

      </div>  
      <div>
        <button>0
        </button>
      </div>  
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button >
      </div>  
      <div>
        <button className="btn btn-primary text-white
        " onClick={erase}>  Erasebac</button>
       </div> 
    </div>
  );
}
