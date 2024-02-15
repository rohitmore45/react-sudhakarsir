import './netflix-register.css'

export function NetflixRegister() {
  return (
    <div>
      <div className='mt-4'>
        <p>Ready to Watch? Enter your email to create or restart you membership.</p>
        <div className='input-group input-group-lg'>
          <input type='text' placeholder='Your Email address' className='form-control' />
          <button className=" btn btn-danger ">
            Get Started
            <span className='bi bi-chevron-right'></span>
          </button>
        </div>
      </div>
    </div>
  )
}