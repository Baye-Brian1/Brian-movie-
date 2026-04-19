import React from 'react'

const functionClick =()=> {
    const clickHandler =()=>{
      console.log('button clicked');
      
    }
  return (
    <div>
      <button onClick={clickHandler} className="bg-white text-black py-1 cursor-pointer px-8">Click</button>
    </div>
  )
}

export default functionClick
