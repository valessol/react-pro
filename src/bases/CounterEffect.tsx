import React, { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap"

const MAXIMUN_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    /* Buscar el mínimo de un array de números (valor máximo del counter: 10)
    if (counter > MAXIMUN_COUNT) return;
    setCounter(prev => prev + 1); */
    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
  }

  useEffect(() => {
    if ( counter < MAXIMUN_COUNT ) return;
    console.log('%cSe llegó al valor máximo', 'color: red; background-color: black;')
    const tl = gsap.timeline();
    tl.to(counterRef.current , {y: -10, duration: 0.2, ease: "ease.out"})
      .to(counterRef.current , {y: 0, duration: 1, ease: "bounce.out"})
    // gsap.to(counterRef.current , {y: -10, duration: 0.2, ease: "ease.out"}).then(() => {
    //   gsap.to(counterRef.current , {y: 0, duration: 1, ease: "bounce.out"})
    // })
  }, [counter])

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref= {counterRef}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}

export default CounterEffect