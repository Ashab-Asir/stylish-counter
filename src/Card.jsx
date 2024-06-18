import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import CountButtons from './CountButtons'
import { useState } from 'react'

export default function Card() {
  const [count,setCount]=useState(0);
  let locked=count===5?true:false;
  return (
    <div className='card'>
      <Title locked={locked}></Title>
      <Count count={count}></Count>
      <ResetButton setCount={setCount}></ResetButton>
      <CountButtons locked={locked} setCount={setCount}></CountButtons>
    </div>
  )
}
