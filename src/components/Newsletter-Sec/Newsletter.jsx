import './Newsletter.css'

const Newsletter = () => {
  return (
    <>
      <section>
        <div className="container newsletter text-light rounded-4">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className='h2 text-white mb-4'>Subscribe Our Newsletter</h2>
              <div
                className="subscribe d-flex justify-content-between align-items-center bg-white mx-auto p-2 rounded-5">
                <input type="email" placeholder="Email" className='border-0 ps-2' />
                <button className="btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter