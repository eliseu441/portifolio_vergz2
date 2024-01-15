import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import perser from 'html-react-parser';
import { Icon } from '@iconify/react';

const About = ({ data }) => {
  const { aboutLeft, aboutRight } = data;
  const { ImgLink, name, designation, resumeCv } = aboutLeft;
  const { aboutText, contactInfo, archivement, note } = aboutRight;

  return (
    <section id="about" className="section about-section bg-g  ">
      <div className="container" >
        <SectionHeading title="PROPOSITO" class='title-about'subTitle="Nice to meet you!" />
        <div
          className="row gy-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="col-lg-5">
            <div className="about-left">
              <div className="about-avatar">
                <img src={`${ImgLink}`} alt="Thumb" class='img-about' />
              </div>
            </div>
          </div>
          <div class='
col-lg-7 ps-xl-5'> <p class="description-text ">Vergz tattoo é um estudio de tatuagem especializado em realismo onde cada projeto é uma obra personalizada utilizando técnicas avançadas e insumos de alta qualidade, trabalhamos em colaboração com cada cliente para transformar suas visões em realidade na pele.</p>
<p class="description-text2 mb-5 ">Você não é apenas mais um cliente, mas sim um co-autor na criação de uma peça artística que reflete sua individualidade e paixões. O ambiente é esterilizado, projetado para que você se sinta à vontade enquanto passa por essa experiência.</p></div>
         
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
