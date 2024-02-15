
import './netflix-header.css'
export function NetflixHeader() {
  return (
    <div className='header'>
      <div>
        <div id="brand-title">Netflix</div>
      </div>
      <div>
        <div className='input-group'>
          <span className="bi bi-globe input-group-text"></span>
          <select className='form-select'>
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <div className='ms-4'>
            <button className="btn btn-danger">Sign in</button>
          </div>
        </div>

      </div>

    </div>
  )
}