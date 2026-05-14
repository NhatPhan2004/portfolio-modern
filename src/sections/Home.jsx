import Button from "../components/Common/Button";
import "@styles/sections/Home.scss";
import avtHome from "../assets/Home_image.jpg";
import SocialMedia from "../components/Common/SocialMedia";
import "@styles/base/Base.scss";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1 className="home__title">
          Hello, <span>I'm Nhat</span>
        </h1>
        <div className="home__animation">
          <h2>Frontend Developer</h2>
        </div>
        <p className="home__description">
          A single mind. A seamless system. A powerful vision. <br /> I don’t
          just build a website. I breathe life into designs, turning them into
          emotional interactive experiences.
        </p>
        <div className="home__buttons">
          <Button
            className="home__btn"
            variant="primary"
            size="lg"
            onClick={() => {}}
          >
            Contact Me
          </Button>
          <Button
            className="home__btn"
            variant="secondary"
            size="lg"
            onClick={() => {}}
          >
            Let's Talk
          </Button>
        </div>
        <SocialMedia />
      </div>

      <div className="home__image">
        <img src={avtHome} alt="Profile" />
      </div>
    </section>
  );
};
export default Home;
