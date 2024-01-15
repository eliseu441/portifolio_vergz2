
import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

const Testimonial = ({ data }) => {
  const { testimonialInfo, brandInfo } = data;
  return (
    <section id="carousel" className="section testimonials-section bg-dark">
      <div className="container">
        <SectionHeading title="PROJETOS UNICOS PRA CADA CLIENTE" subTitle="Testimonial" />
        <div className="testimonials">
          <Carousel data={testimonialInfo} />
        </div>
      </div>
    </section >
  )
}
Testimonial.propTypes = {
  data: PropTypes.object
}

export default Testimonial
