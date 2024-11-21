import React, { useState } from 'react'

const State = () => {
    const [total, setTotal] = useState(0);
    const [color, setColor] = useState("red")
  return (
    <div className='container'>
        <h2 className='total'>Counter: {total}</h2>
        <div className="btns">
            <button onClick={() => {setTotal(total+1)}}>Increase Count</button>
            <button onClick={() => {setTotal(total-1)}}>Decrease Count</button>
        </div>

        <div className='content'>
        <div style={{color:color, fontSize:40}} className='text'>My favorite color is <span style={{color:color,}}>{color}!</span></div>
            <div style={{fontSize:40}} className='text'>My favorite color is <span style={{color:color,}}>{color}!</span></div>
            <button onClick={() => {setColor("green")}} className='green'>Green</button>
            <button onClick={() => {setColor("red")}} className='red'>Red</button>
            <button onClick={() => {setColor("violet")}} className='violet'>Violet</button>
            <button onClick={() => {setColor("yellow")}} className='yellow'>Yellow</button>
        </div>
    </div>
  )
}

export default State