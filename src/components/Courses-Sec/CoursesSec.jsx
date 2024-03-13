import './CoursesSec.css';
import CourseImg1 from '../../assets/images/web-design.png';
import CourseImg2 from '../../assets/images/graphics-design.png';
import CourseImg3 from '../../assets/images/ui-ux.png';
import CoursesCard from './CoursesCard';

const courseData = [
  {
    id: '01',
    courseImg: CourseImg1,
    courseTitle: 'Web Design BootCamp-2024 For Beginners',
    courseLessons: '12',
    courseStudents: '12.5',
    courseRating: '5.9'
  },
  {
    id: '02',
    courseImg: CourseImg2,
    courseTitle: 'Professional Graphics Design, PhotoShop, Adobe XD, Figma',
    courseLessons: '12',
    courseStudents: '12.5',
    courseRating: '5.9'
  },
  {
    id: '03',
    courseImg: CourseImg3,
    courseTitle: 'UI/UX BootCamp for Beginners in 2024',
    courseLessons: '12',
    courseStudents: '12.5',
    courseRating: '5.9'
  }
]

const CoursesSec = () => {
  return (
    <>
      <section id='courses'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="course_top d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-top-left w-50">
                  <h2 className="h2">
                    Our Populer Courses
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae corporis ratione consequatur dolor eum cumque natus nemo impedit minus!
                  </p>
                </div>
                <div className="w-25 text-md-end mediaButton">
                  <button className="btn">See All</button>
                </div>
              </div>
            </div>
            {
              courseData.map(item => (
                <div key={item.id} className="col-12 col-lg-4 col-md-6">
                  <CoursesCard item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default CoursesSec