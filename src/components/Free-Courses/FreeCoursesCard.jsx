
const FreeCoursesCard = (props) => {
  const {courseImg, title, students, rating} = props.item
  return (
    <div className="single_free_course mb-4">
      <div className="free_course_img position-relative ">
        <img src={courseImg} alt={title} className='w-100 rounded-3' />
        <button className='btn free_btn position-absolute'>Free</button>
      </div>
      <div className="free_course_details mt-4">
        <h6>{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <span className='d-flex align-items-center gap-2'>
            <i className='ri-user-line'></i>{students}K
          </span>
          <span className='d-flex align-items-center gap-2'>
            <i className='ri-star-fill'></i>{rating}K
          </span>
        </div>
      </div>
    </div>
  )
}

export default FreeCoursesCard