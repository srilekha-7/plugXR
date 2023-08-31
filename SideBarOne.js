import React, { useEffect, useRef, useState } from "react";

function SideBarOne(props) {
  const [minWidth, maxWidth, defaultWidth] = [200, 500, 300];
  const [width, setWidth] = useState(defaultWidth);
  const isResized = useRef(false);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(maxWidth);
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
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumn: "repeat(auto-fit,minmax(200px,1fr))",
            overflow: "scroll",
            backgroundColor: "white",
            height: "50vh",
            width: `${width / 16}rem`,
            margin: "5px",
            padding: "10px",
          }}
        >
          {cards.map((eachCard) => {
            return (
              <div>
                <div
                  style={{
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <p>{eachCard}</p>
                </div>
              </div>
            );
          })}
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
  );
}

export default SideBarOne;
