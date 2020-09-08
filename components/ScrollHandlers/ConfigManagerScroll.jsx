import React, { useRef, useEffect, useState } from "react";

import { Button } from "@material-ui/core";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const useMountEffect = (fun) => useEffect(fun, []);

const ScrollDemo = (props) => {
  const myRef = useRef(null);
  const { Provider } = React.createContext();
  const [scrollPosition] = useState(0);
  useMountEffect(() => scrollToRef(myRef)); // Scroll on mount
  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY < 200) {
      document.getElementById("ConfigNav").style.fontWeight = "bold";
    } else {
      document.getElementById("ConfigNav").style.fontWeight = "normal";
    }
  });
  return (
    <>
      <Provider value={{ scrollPosition }}>{props.children}</Provider>
      {/* React.Fragment*/}
      <div
        style={{
          height: "115px",
          textAlign: "right",
          position: "fixed",
          right: "0px",
        }}
      >
        <Button onClick={() => scrollToRef(myRef)}>
          <span id="ConfigNav">Configuration Manager</span>
        </Button>
      </div>

      <div
        ref={myRef}
        style={{ position: "absolute", top: "100px", marginLeft: "20px" }}
      >
        <h1 style={{ textAlign: "left" }}>Configuration Manager</h1>
      </div>
      {/* Attach ref object to a dom element */}

      {/*<button onClick={() => scrollToRef(myRef)}>Click to scroll </button>}
      {/* Scroll on click */}
    </>
  );
};

export const ScrollTracked = (Consumer) => (props) => (
  <Consumer>{(value) => <Consumer {...value} {...props} />}</Consumer>
);

export default ScrollDemo;
