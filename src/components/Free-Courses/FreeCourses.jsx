import './FreeCourses.css';
import courseImg01 from '../../assets/images/web-development.png';
import courseImg02 from '../../assets/images/kids-learning.png';
import courseImg03 from '../../assets/images/seo.png';
import courseImg04 from '../../assets/images/ui-ux.png';
import FreeCoursesCard from './FreeCoursesCard';

const freeCourses = [
  {
    id: '01',
    courseImg: courseImg01,
    title: 'Basic Web Development Course',
    students: 5.3,
    rating: 1.7
  },
  {
    id: '02',
    courseImg: courseImg02,
    title: 'Coding for Junior Basic Course',
    students: 5.3,
    rating: 1.7
  },
  {
    id: '03',
    courseImg: courseImg03,
    title: 'Search Engine Optimization - Basic',
    students: 5.3,
    rating: 1.7
  },
  {
    id: '04',
    courseImg: courseImg04,
    title: 'Basic UI/UX Design - Figma',
    students: 5.3,
    rating: 1.7
  },
]

const FreeCourses = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="h2 fw-bolder">
                Our Free Courses
              </h2>
            </div>
            {
              freeCourses.map(item => (
                <div key={item.id} className="col-lg-3 col-md-6">
                  <FreeCoursesCard item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default FreeCourses