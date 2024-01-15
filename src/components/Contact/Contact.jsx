import PropTypes from "prop-types"
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";


const Contact = ({ data }) => {
  const { contactInfo, contactForm } = data;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    idade: '',
    local: '',
    ideia: '',
  });

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "fcc74231-656a-425b-a54f-aff38354fadb");

    const object = await Object.fromEntries(formData);
    let response = `NOME:${object.name},   LOCAL:${object.local},   IDEIA:${object.ideia},   IDADE:${object.idade}`
    console.log(response)
    let a = `https://api.whatsapp.com/send/?phone=5512982047622&text&type=phone_number&app_absent=0&text=${response}`
  window.location.href = a;
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFormData({ name: "", idade: "", local: "", ideia: "" });
      setLoading(false)
    }
  };
  return (
    <section
      id="contact"
      data-scroll-index={5}
      className="section contact-section"
    >
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <SectionHeading title="Me contate:" subTitle="Contact" />
            <div className="contact-info">
            <div class="teste1 ">
                    <div class="box row justify-content-center">
                        <div class="localization-icon col-4 d-flex justify-content-end"></div>
                        <h1 class="col-6 d-flex justify-content-start mb-4" style={{ color: "white"}}>Localização:</h1>
                        <iframe className='google-map' style={{ width: "95%", height: "85%", borderRadius:"20px" }} src="https://maps.google.com/maps?width=310&amp;height=242&amp;hl=en&amp;q=Alecrim Florido&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div className="contact-form bg-g" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1000">
              <div className="contact-head">
                <h4>{contactForm.title}</h4>
                <p>{contactForm.text}</p>
              </div>
              <form onSubmit={onSubmit} id="contact-form" method="POST">
                <input type="hidden" name="from_name" value="Lilon Macwan" />
                <input type="hidden" name="replyto" value="custom@gmail.com" />
                <div className="row gx-3 gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Nome</label>
                      <input
                        name="name"
                        id="name"
                        placeholder="Name *"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Idade</label>
                      <input
                        name="idade"
                        id="idade"
                        placeholder="Idade"
                        className="form-control"
                        type="number"
                        onChange={handleInputChange}
                        value={formData.idade}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Local da tatuagem e tamanho</label>
                      <input
                        name="local"
                        id="local"
                        placeholder="local"
                        className="form-control"
                        type="text"
                        onChange={handleInputChange}
                        value={formData.local}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Descreva sua ideia</label>
                      <textarea
                        name="ideia"
                        id="ideia"
                        placeholder="descreva o maximo que puder"
                        rows={6}
                        className="form-control"
                        onChange={handleInputChange}
                        value={formData.ideia}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button
                        className="px-btn dark w-100"
                        type="submit"
                        value="Send"
                      >
                        {loading ? "Sending..." : "Enviar"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object
}



export default Contact;
