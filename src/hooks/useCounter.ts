import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap"

export const useCounter = ({maxCount = 10}) => {
    const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, maxCount));
  }

  useLayoutEffect(() => {
    //creo una instancia de timeline en el momento en que todo el html se ha cargado (useLayoutEffect)
    //usando tl como una referencia, me aseguro de no crear multiples instancias del timeline
    // al usar .pause() estoy añadiendo las animaciones, pero diciendole agsap que las pause y no las ejecute. De no hacerlo, se ejecutarán apenas se cargue el código.
    if(!elementToAnimate.current) return;
    tl.current.to(elementToAnimate.current , {y: -10, duration: 0.2, ease: "ease.out"})
      .to(elementToAnimate.current , {y: 0, duration: 1, ease: "bounce.out"}).pause()
  }, [])

  useEffect(() => {
    // en este useEffect le diremos cuando debe ejecutar las animaciones. En este caso, cada vez que cambie el counter.
    // si queremos que solo aplique cuando llegue al valor máximo, le agregamos un condicional:
    //if (counter < maxCount) return;

    // al utilizar tl.play() se ejecuta la animación una sola vez (aunque cambie el counter), ya que setea el from en true por default, lo que significa que ejecuta la posición actual.
    // al enviarle como argumento el segundo en el que debe ejecutarse (from), lo hará cada vez que cumpla esa condición (siempre que cambie el counter)
    tl.current.play(0) 
  }, [counter])

  return {
    counter,
    elementToAnimate,
    handleClick,
  }
}