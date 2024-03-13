
const CoursesCard = (props) => {
  const {courseImg, courseTitle, courseLessons, courseStudents, courseRating} = props.item
  return (
    <div className="single_course p-2">
      <div className="course_img">
        <img src={courseImg} alt="web design" className='w-100 rounded-3 mb-4' />
      </div>
      <div className="course_details">
        <h5 className='h6 course_title mb-4'>
          {courseTitle}
        </h5>
        <div className='d-flex align-items-center justify-content-between mx-2 mx-md-0'>
          <p className="lessons  d-flex align-items-center gap-1">
            <i className='ri-book-open-line'></i> {`${courseLessons} Lessons`}
          </p>
          <p className="students  d-flex align-items-center gap-1">
            <i className='ri-user-line'></i> {`${courseStudents}K`}
          </p>
        </div>
        <div className='d-flex align-items-center justify-content-between mx-2 mx-md-0'>
          <p className="rating  d-flex align-items-center gap-1">
            <i className='ri-star-fill'></i> {`${courseRating}K`}
          </p>
          <p className="enroll  d-flex align-items-center gap-1">
            <a href="#">Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoursesCard