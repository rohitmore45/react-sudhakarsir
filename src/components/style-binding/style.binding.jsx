import { useState } from "react";

export function StyleBinding() {
  // const [userName, setUserName] = useState("");
  // const [styleObject, setStyleObject] = useState({ border: "", boxShadow: "" });
  // function verifyName(e) {
  //   setUserName(e.target.value);
  //   if (userName == "") {
  //     setStyleObject({
  //       border: "2px solid red",
  //       boxShadow: "2px 2px 2px red",
  //     });
  //   } else {
  //     setStyleObject({
  //       border: "2px solid green",
  //       boxShadow: "2px 2px 2px green",
  //     });
  //   }
  // }

  const [styles, setStyles] = useState({ fontSize: "18px ", color: "black" });

  function handleSizeChange(e) {
    setStyles({
      fontSize: `${e.target.value}px`,
      color: styles.color,
    });
  }

  function handleColorChange(e) {
    // console.log(e.target.value)
    setStyles({
      fontSize: styles.fontSize,
      color: e.target.value,
    });
  }
  return (
    <>
      <div className="container-fluid">
        {/* <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" style={styleObject} onBlur={verifyName} />
          </dd>
        </dl> */}

        <h2>Style Binding</h2>
        <dl>
          <dt>Font Size</dt>
          <dd>
            <input
              type="range"
              min={10}
              max={100}
              onChange={handleSizeChange}
            />
          </dd>
          <dt>Font Color</dt>
          <dd>
            <input type="color" onChange={handleColorChange} />
          </dd>
        </dl>
        <p className="text-center" style={styles}>
          Sample Test
        </p>
      </div>
    </>
  );
}
