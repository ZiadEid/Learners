import './Testimonials.css';
import testimonialImg from '../../assets/images/testimonial01.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-lg-8">
              <div className="testimonial_wrapper d-flex justify-content-between">
                <div className="testimonial_img w-50">
                  <img src={testimonialImg} alt="testimonials" className='w-100' />
                </div>
                <div className="testimonial_content w-50">
                  <h2 className="h2">Our Students Voice</h2>
                  <Slider {...settings} >
                    <div className="single_testimonial">
                      <h6 className="h6 mt-3 mb-4 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere ipsam eius odio nobis laboriosam totam nemo fuga modi id?
                      </p>
                      <div className="student_info">
                        <h6 className='h6 fw-bold'>John Doe</h6>
                        <p>California, united State</p>
                      </div>
                    </div>
                    <div className="single_testimonial">
                      <h6 className="h6 mt-3 mb-4 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere ipsam eius odio nobis laboriosam totam nemo fuga modi id?
                      </p>
                      <div className="student_info">
                        <h6 className='h6 fw-bold'>John Doe</h6>
                        <p>California, united State</p>
                      </div>
                    </div>
                    <div className="single_testimonial">
                      <h6 className="h6 mt-3 mb-4 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere ipsam eius odio nobis laboriosam totam nemo fuga modi id?
                      </p>
                      <div className="student_info">
                        <h6 className='h6 fw-bold'>John Doe</h6>
                        <p>California, united State</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials