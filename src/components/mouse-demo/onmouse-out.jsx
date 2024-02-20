import { useState } from "react";

export function OnMouseOut() {
  const [photos] = useState([
    "images/mob1.webp",
    "images/mob2.webp",
    "images/mob3.webp",
    "images/mob4.webp",
    "images/mob5.webp",
  ]);

  const [styleObject, setStyleObject] = useState({
    position: "",
    top: "",
    left: "",
  });

  function handleMouseOver(e) {
    e.currentTarget.stop();
  }

  function handleMouseOut(e) {
    e.currentTarget.start();
  }

  function handleMouseMove(e) {
    setStyleObject({
      position: "fixed",
      left: e.clientX + "px",
      top: e.clientY + "px",
    });
  }
  return (
    <>
      <div className="container-fluid">
        <div className=" mt-4">
          <marquee
            scrollamount="10"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {photos.map((photo) => (
              <img
                src={photo}
                key={photo}
                className="m-2"
                width={150}
                height={150}
              />
            ))}
          </marquee>
        </div>
      </div>

      <div onMouseMove={handleMouseMove}>
        <div style={{ height: "1000px" }}>
          <p>move your mouse pointer to move.</p>
        </div>
        <img
          src="images/indianFlag.gif"
          style={styleObject}
          width={50}
          height={50}
        />
      </div>
    </>
  );
}
