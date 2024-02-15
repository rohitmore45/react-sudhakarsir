import './login.component.css'
export function LoginComponent() {
  return (
    <div id='form-container' className="container-fluid">
      <form>
        <h2><span className="bi bi-person-fill"></span>User Login</h2>
        <div className="mb-2">
          <label className="form-label">User Name</label>
          <div>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label">Password</label>
          <div>
            <input type="password" className="form-control" />
          </div>
        </div>
        <div className="mb-2">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  )
}