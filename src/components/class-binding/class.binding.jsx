import { useState } from "react";

export function ClassBinding() {
  const [theme, setTheme] = useState("");
  const [btnTheme, setBtnTheme] = useState("");

  function handleSwitch(e) {
    // console.log(e);
    if (e.target.checked) {
      setTheme("bg-dark text-white");
      setBtnTheme("btn btn-light w-100");
    } else if (e.target.checked != true) {
      setTheme("");
      setBtnTheme("btn btn-dark w-100");
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "500px" }}
        >
          <form className={theme}>
            <div className="my-3 form-switch">
              <input
                type="checkbox"
                onChange={handleSwitch}
                className="form-check-input"
              />
              Theme
            </div>
            <h2>
              <span className="bi bi-person-fill">User Login</span>
            </h2>
            <dl>
              <dt>User Name</dt>
              <dd>
                <input type="text" className="form-control" />
              </dd>
              <dt>Password</dt>
              <dd>
                <input type="password" className="form-control" />
              </dd>
            </dl>
            <button className={btnTheme}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
