import React, { useState } from 'react'

export default function Square({value,onSquareClick}) {

  
  return (
    <div 
    style={{border:"2px solid",
    height:"70px",
    widows:'100%',
    display:'flex',
    justifyContent:"center",
    alignItems:"center"}}>
      <button className='square'
      onClick={onSquareClick}
      >{value}
      </button>
    </div>
  )
}
