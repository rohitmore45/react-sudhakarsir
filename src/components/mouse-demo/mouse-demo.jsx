import { useState } from "react";
import "./mouse-demo.css";

export function MouseDemo() {
  const [photos] = useState([
    "images/mob1.webp",
    "images/mob2.webp",
    "images/mob3.webp",
    "images/mob4.webp",
    "images/mob5.webp",
  ]);
  const [preview, setPreview] = useState("");
  function handleMouseOver(e) {
    // console.log(e)
    setPreview(e.target.src);
  }
  return (
    <>
      <div className="container-fluid">
        <section className="row mt-2">
          <nav className="col-2">
            {photos.map((photo) => (
              <div
                className="mb-2 p1 border border-2 border-primary"
                key={photo}
                style={{ width: "74px", cursor: "pointer" }}
              >
                <img
                  src={photo}
                  width={70}
                  height={70}
                  onMouseOver={handleMouseOver}
                />
              </div>
            ))}
          </nav>
          <main className="col-10">
            <img
              src={preview}
              className="preview-image"
              width="300"
              height="400"
            />
          </main>
        </section>
      </div>
    </>
  );
}
