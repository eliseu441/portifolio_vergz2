import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Testimonial from "../components/Testimonial/Testimonial";
import data from "../data.json";


const Home = () => {
  const { heroData, aboutData, experienceData, portfolioData, serviceData, blogData, sliderData, contactData, footerData } = data;
  return (
    <>
      <main className="wrapper">
        <Hero data={heroData} />
        <About data={aboutData} />
        <Testimonial data={sliderData} />
        <Contact data={contactData} />
      </main>
    </>
  )
}

export default Home;
