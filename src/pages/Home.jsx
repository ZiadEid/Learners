import AboutUs from "../components/AboutUs/AboutUs";
import ChooseUs from "../components/Choose-Us/ChooseUs";
import CoursesSec from "../components/Courses-Sec/CoursesSec";
import FeaturesSec from "../components/Features-Sec/FeaturesSec";
import Footer from "../components/Footer/Footer";
import FreeCourses from "../components/Free-Courses/FreeCourses";
import Header from "../components/Header/Header";
import HeroSec from "../components/Hero-Sec/HeroSec";
import Newsletter from "../components/Newsletter-Sec/Newsletter";
import SupportersSec from "../components/Supporters-Sec/SupportersSec";
import Testimonials from "../components/Testimonials-Sec/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSec />
      <SupportersSec />
      <AboutUs />
      <CoursesSec />
      <ChooseUs />
      <FeaturesSec />
      <FreeCourses />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home