import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";



const Carousel = ({ data }) => {
  const { useFor, info, settings } = data;
  if (useFor === "testimonial") {
    return (
      <Slider {...settings}>
        {
          info.map((element, index) => (
            <Singletestimonial element={element} key={index} />
          ))
        }
      </Slider>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}


export default Carousel
