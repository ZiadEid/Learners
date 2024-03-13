import './HeroSec.css';
import HeroImg1 from '../../assets/images/hero-img1.png'

const HeroSec = () => {
  return (
    <>
      <section id='home'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 heroSeconde">
              <div className="hero_content">
                <h2 className='mb-4'>Anytime Anywhere <br /> Learn on your <br /> Sutable Schedule</h2>
                <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Non ea expedita eveniet ab, iure dolorum <br /> minus corporis nemo autem dolor.
                </p>
                <div className="search rounded-5 d-flex justify-content-between align-items-center">
                  <input type="search" placeholder='search' />
                  <button className="btn">Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 heroFirst">
              <img src={HeroImg1} alt="heroImage" className='w-100' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSec