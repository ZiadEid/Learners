import './ChooseUs.css';
import chooseImg from '../../assets/images/why-choose-us.png'
import { useState } from 'react';
import ReactPlayer from 'react-player';

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="choose_content pe-md-5">
                <h2>Why Choose Us</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quos odit eius placeat pariatur voluptatibus aut quam, itaque delectus aliquam iste, aspernatur perspiciatis necessitatibus explicabo rem vero facilis tempore blanditiis, minima illo impedit. Sapiente nobis delectus quis eaque doloremque ullam corrupti assumenda, voluptatum cum molestiae eius laudantium, qui aliquid ex! Adipisci doloribus consequatur voluptatem debitis?
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose_img position-relative top-0 start-0 w-100 h-100">
                {
                  showVideo ? (
                    <ReactPlayer
                      url={`https://www.youtube.com/shorts/dtVq6HsU0f8`}
                      controls
                      width='100%'
                      height='300px'
                    />) : (
                    <img src={chooseImg} alt="why choose us" className='w-100 rounded-4' />
                  )}
                {
                  showVideo === false ? (
                    <span
                      className='play_icon position-absolute top-50 start-50 translate-middle bg-white rounded-5 d-flex align-items-center justify-content-center'
                    >
                      <i
                        className='ri-play-circle-line p-2'
                        onClick={() => setShowVideo(!showVideo)}
                      ></i>
                    </span>
                  ) : ''
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChooseUs