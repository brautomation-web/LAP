import React, { useRef, useEffect } from "react";
import { Button, Divider } from "@material-ui/core";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = (fun) => useEffect(fun, []);

const ScrollDemo = () => {
  const myRef = useRef(null);

  useMountEffect(() => scrollToRef(myRef)); // Scroll on mount
  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 1500 && window.scrollY < 2400) {
      document.getElementById("StepNav").style.fontWeight = "bold";
    } else {
      document.getElementById("StepNav").style.fontWeight = "normal";
    }
  });
  return (
    <>
      {/* React.Fragment*/}
      <div
        style={{
          height: "115px",
          textAlign: "right",
          position: "fixed",
          right: "0px",
          marginTop: "20px",
        }}
      >
        <Button onClick={() => scrollToRef(myRef)}>
          <span id="StepNav">Step Manager</span>
        </Button>
      </div>
      <div
        ref={myRef}
        className="divider"
        style={{ position: "absolute", top: "1990px" }}
      >
        <Divider></Divider>
      </div>
      <div style={{ position: "absolute", top: "2000px" }}>
        <h1 style={{ textAlign: "left" }}>Step Manager</h1>
      </div>
      {/* Attach ref object to a dom element */}

      {/*<button onClick={() => scrollToRef(myRef)}>Click to scroll </button>}
      {/* Scroll on click */}
    </>
  );
};

export default ScrollDemo;
