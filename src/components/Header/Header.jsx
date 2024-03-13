import { useRef } from 'react'
import './Header.css'

const navLinks = [
  {
    display: 'Home',
    url: '#home'
  },
  {
    display: 'About',
    url: '#aboutUs'
  },
  {
    display: 'Courses',
    url: '#courses'
  },
  {
    display: 'Pages',
    url: '#pages'
  },
  {
    display: 'Blogs',
    url: '#blogs'
  }
]

const Header = () => {

  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  return (
    <div>
      <header className='header w-100'>
        <div className='container'>
          <div className="navigation d-flex justify-content-between align-items-center">
            <div className="logo">
              <h2 className='d-flex align-items-center'>
                <i className="ri-pantone-line"></i> Learners.
              </h2>
            </div>
            <div className="nav d-flex align-items-center gap-5">
              <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav_list d-flex m-0 p-0">
                  {
                    navLinks.map((item, index) => (
                      <li key={index} className="nav_item">
                        <a href={item.url}>{item.display}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="nav_number">
                <p className='mb-0 d-flex align-items-center gap-2'>
                  <i className="ri-phone-line"></i> +201060536977
                </p>
              </div>
              <div className="mobile_menu d-none">
                <span><i className="ri-menu-line" onClick={menuToggle}></i></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header