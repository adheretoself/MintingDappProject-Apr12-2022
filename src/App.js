import logo from './logo.svg';
import { gsap } from "gsap";
import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <div className="app">
      <div className="box" ref={boxRef}>Hello</div>
    </div>
  );
}

export default App;
