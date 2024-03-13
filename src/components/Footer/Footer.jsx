import './Footer.css'

const footerQuickLinks = [
  {
    display: 'Home',
    url: '#'
  },
  {
    display: 'About Us',
    url: '#'
  },
  {
    display: 'Courses',
    url: '#'
  },
  {
    display: 'Blogs',
    url: '#'
  }
]

const footerInfoLinks = [
  {
    display: 'Membership',
    url: '#'
  },
  {
    display: 'Purchases Guide',
    url: '#'
  },
  {
    display: 'Privacy Policy',
    url: '#'
  },
  {
    display: 'Terms of Service',
    url: '#'
  }
]

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className='text-center text-lg-start'>
                <h2 className="h2 d-flex align-items-center justify-content-center justify-content-lg-start gap-1">
                  <i className='ri-pantone-line'></i> Learners.
                </h2>
                <div className="follows">
                  <p className='mb-0'>Follow us on social media</p>
                  <span>
                    <a className='text-decoration-none' href="https://www.facebook.com/" target='_blank'>
                      <i className='ri-facebook-line'></i>
                    </a>
                  </span>
                  <span className='ps-3'>
                    {" "}
                    <a className='text-decoration-none' href="https://www.instagram.com/" target='_blank'>
                      <i className='ri-instagram-line'></i>
                    </a>
                  </span>
                  <span className='ps-3'>
                    {" "}
                    <a className='text-decoration-none' href="https://www.linkedin.com/" target='_blank'>
                      <i className='ri-linkedin-line'></i>
                    </a>
                  </span>
                  <span className='ps-3'>
                    {" "}
                    <a className='text-decoration-none' href="https://www.twitter.com/" target='_blank'>
                      <i className='ri-twitter-line'></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="mb-4 text-center text-lg-start">
                <h6 className="h6 fw-bold">Explore</h6>
                <ul className="list-group">
                  {
                    footerQuickLinks.map((item, index) => (
                      <li key={index} className="list-group-item bg-transparent border-0 px-0">
                        <a className='list_link text-decoration-none' href={item.url}>{item.display}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="text-center text-lg-start">
                <h6 className="h6 fw-bold">Information</h6>
                <ul className="list-group">
                  {
                    footerInfoLinks.map((item, index) => (
                      <li key={index} className="list-group-item bg-transparent border-0 px-0">
                        <a className='list_link text-decoration-none' href={item.url}>{item.display}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="text-center text-lg-start">
                <h6 className="h6 fw-bold">Get in Touch</h6>
                <p>Phone: +201060536977</p>
                <p>email: example@gmail.com</p>
                <p>Adress: Elnhas st. Tanta, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer