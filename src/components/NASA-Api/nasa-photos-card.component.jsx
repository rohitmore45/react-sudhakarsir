import { useEffect, useState } from "react";
import "./nasa-photos-card.css";

export function NasaPhotosCardComponent() {
  const [mars, setMars] = useState({ photos: [] });

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMars(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="text-center">Marc Rover Photos by NASA</h2>
      <div className="d-flex flex-wrap justify-content-evenly">
        {mars.photos.map((item) => {
          return (
            <div key={item.id} className="card m-2 p-2">
              <img src={item.img_src} alt="Mars_images" height={250} />
              <div className="card-body">
                <dl>
                  <dt>Camera Name:</dt>
                  <dd>{item.camera.full_name}</dd>
                  <dt>Rover Name:</dt>
                  <dd>{item.rover.name}</dd>
                </dl>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
