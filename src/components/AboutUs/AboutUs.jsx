import './AboutUs.css';
import AboutUsImg from '../../assets/images/about-us.png';
import CountUp from 'react-countup'

const AboutUs = () => {
  return (
    <>
      <section id='aboutUs'>
        <div className="container">
          <div className="row  mediaChanges">
            <div className="col-lg-6">
              <div className="about_us_img mb-5">
                <img src={AboutUsImg} alt="About us" className='w-100' />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_us_content ps-lg-5">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, distinctio? Suscipit minus, cumque asperiores incidunt maxime dicta ipsam sit id.
                </p>
                <div className="about-us-counter text-lg-start text-center">
                  <div className='d-flex align-items-center gap-5'>
                    <div className="single_counter">
                      <span className="counter">
                        <CountUp start={0} end={25} duration={2} suffix='K' />
                        <p className="counter_title">
                          Completed Project
                        </p>
                      </span>
                    </div>
                    <div className="single_counter">
                      <span className="counter">
                        <CountUp start={0} end={30} duration={2} suffix='M' />
                        <p className="counter_title">
                          Patient Around World
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-5'>
                    <div className="single_counter">
                      <span className="counter">
                        <CountUp start={0} end={75} duration={2} suffix='M' />
                        <p className="counter_title">
                        Ideas Raised Funds
                        </p>
                      </span>
                    </div>
                    <div className="single_counter">
                      <span className="counter">
                        <CountUp start={0} end={5} duration={2} suffix='K' />
                        <p className="counter_title">
                        Categories Served
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs