import PropTypes from 'prop-types';

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="section-heading">
      <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{title}</h2>
    </div>
  )
}

SectionHeading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}


export default SectionHeading;
