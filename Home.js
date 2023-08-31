import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Popup from "./SideBarOne";
import SideBarOne from "./SideBarOne";
import Draggable from "react-draggable";
// import draggable from "react-draggable";
function Home(props) {
  const [popup, setPopUp] = useState(false);
  const onHandleSave = () => {
    setPopUp(true);
  };
  const onHandlePopUp = () => {
    setPopUp(false);
  };
  const [minWidth, maxWidth, defaultWidth] = [500, 800, 500];
  const [width, setWidth] = useState(defaultWidth);
  const isResized = useRef(false);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }
      setWidth((prevWidth) => {
        const newWidth = prevWidth + e.movementX / 2;
        console.log(newWidth);
        const range = newWidth >= minWidth && newWidth <= maxWidth;
        console.log(range);
        return range ? newWidth : prevWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#29044f", padding: "1%" }}>
      <div>
        <div
          style={{
            marginBottom: "1%",

            backgroundColor: "white",
            marginTop: "2%",
          }}
        >
          <button onClick={onHandleSave}>Save</button>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <SideBarOne />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "white",
                height: "55vh",
                width: `${width / 16}rem`,
                position: "relative",
              }}
            >
              {popup && (
                <Draggable
                  bounds={{
                    left: 0,
                    top: 0,
                    right: 200,
                    bottom: 180,
                  }}
                >
                  <div
                    // draggable
                    style={{
                      width: "30vh",
                      margin: "10px",
                      height: "30vh",
                      display: "flex",
                      position: "absolute",
                      justifyContent: "flex-end",
                      cursor: "move",
                      boxShadow:
                        " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} onClick={onHandlePopUp} />
                  </div>
                </Draggable>
              )}
            </div>
            <div
              style={{
                height: "55vh",
                width: "5px",
                backgroundColor: "white",
                marginRight: "2%",
                cursor: "e-resize",
              }}
              onMouseDown={() => {
                isResized.current = true;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
