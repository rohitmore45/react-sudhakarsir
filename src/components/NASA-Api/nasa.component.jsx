import { useEffect, useState } from "react";
import "./nasa.component.css";

export function NasaComponent() {
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
      <h2>Mass rover photos</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo Id</th>
            <th>Preview</th>
            <th>Camera Name</th>
            <th>Rover Name</th>
          </tr>
        </thead>
        <tbody>
          {mars.photos.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <a href={item.img_src} target="_blank">
                    <img src={item.img_src} height={250} width={300} />
                  </a>
                </td>
                <td>{item.camera.full_name}</td>
                <td>{item.rover.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
