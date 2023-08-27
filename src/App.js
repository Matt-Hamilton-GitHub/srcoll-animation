import "./styles.css";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function App() {
  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0
  };

  const { ref: containerRef, inView: isVisible } = useInView();
  const { ref: containerRef1, inView: isVisible1 } = useInView();
  const { ref: containerRef2, inView: isVisible2 } = useInView();
  const { ref: containerRef3, inView: isVisible3 } = useInView();

  return (
    <div className="App">
      <div className="isVisible">
        <h1>{isVisible ? "IN VIEW POINT" : "NOT IN VIEW POINT"}</h1>
        <h2 ref={containerRef}>Start editing to see some magic happen!</h2>
      </div>
      <div className={isVisible1 ? "hidden" : "show"} ref={containerRef1}>
        <h1>Midlle</h1>
        <h2>MAGIC</h2>
      </div>

      <div className={isVisible2 ? "hidden" : "show"} ref={containerRef2}>
        <h1>Bottom</h1>
        <h2>Might</h2>
      </div>
      <div className={isVisible3 ? "hidden" : "show"} ref={containerRef3}>
        <h1>Footer</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
