import React, { useRef, useEffect } from "react";

import { Button, Divider } from "@material-ui/core";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = (fun) => useEffect(fun, []);

const ScrollDemo = () => {
  const myRef = useRef(null);

  document.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 200 && window.scrollY < 1500) {
      document.getElementById("SeqNav").style.fontWeight = "bold";
    } else {
      document.getElementById("SeqNav").style.fontWeight = "normal";
    }
  });
  useMountEffect(() => scrollToRef(myRef)); // Scroll on mount

  return (
    <>
      {/* React.Fragment*/}
      <div
        style={{
          height: "115px",
          textAlign: "right",
          position: "fixed",
          right: "0px",
          marginTop: "10px",
        }}
      >
        <Button onClick={() => scrollToRef(myRef)}>
          <span id="SeqNav">Sequence Manager</span>
        </Button>
      </div>
      <div
        ref={myRef}
        className="divider"
        style={{ position: "absolute", top: "1090px" }}
      >
        <Divider></Divider>
      </div>
      <div style={{ position: "absolute", top: "1100px" }}>
        <h1 style={{ textAlign: "left" }}>Sequence Manager</h1>
      </div>
      {/* Attach ref object to a dom element */}

      {/*<button onClick={() => scrollToRef(myRef)}>Click to scroll </button>}
      {/* Scroll on click */}
    </>
  );
};

export default ScrollDemo;
