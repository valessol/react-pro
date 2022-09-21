import React, { useState, useEffect } from 'react'

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const handleClick = () => {
    /* Buscar el mínimo de un array de números (valor máximo del counter: 10)
    if (counter > MAXIMUN_COUNT) return;
    setCounter(prev => prev + 1); */
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
  }

  useEffect(() => {
    if ( counter < MAXIMUN_COUNT ) return;
    console.log('%cSe llegó al valor máximo', 'color: red; background-color: black;')
  }, [counter])

  return (
    <>
      <h1>CounterEffect: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default CounterEffect