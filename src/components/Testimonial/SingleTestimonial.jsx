import PropTypes from 'prop-types';

const Singletestimonial = ({ element }) => {
  return (
    <div className="testimonials-box ">
      <div className="row gy-4">
        <div className="col-sm-5 col-lg-5">
          <div className="t-avatar">
            <img src={element.imgLink} title="" alt="" />
          </div>
        </div>
        <div className="col-sm-7 col-lg-7">
          <div className="t-text">
            <p>{element.text}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

Singletestimonial.propTypes = {
  element: PropTypes.object
}

export default Singletestimonial
