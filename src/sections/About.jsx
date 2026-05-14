import SectionTitle from "../components/Common/SectionTitle";
import aboutImg from "../assets/About_image.jpg";
import "@styles/sections/About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <SectionTitle
        title="About"
        highlight="Me"
        subtitle="A glimpse into my journey. Passionate developer with a creative edge."
      />
      <img src={aboutImg} alt="aboutImg" className="about__image" />
    </section>
  );
};

export default About;
