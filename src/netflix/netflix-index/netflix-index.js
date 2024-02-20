import './netflix-index.css'
import { NetflixHeader } from '../netflix-header/netflix-header'
import { NetflixMain } from '../netflix-main/netflix-main'
export function NetflixIndex() {
  return (
    <div id='banner'>
      <div id='shade'>
        <NetflixHeader />
        <main className='main'>
          <div>
            <NetflixMain />
          </div>

        </main>
      </div>
    </div>
  )
}