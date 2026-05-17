import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { aboutData } from "../data/aboutData";
import aboutImg from "../assets/About_image.jpg";
import SectionTitle from "../components/Common/SectionTitle";
import Button from "../components/Common/Button";
import "@styles/sections/About.scss";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { ref, inView } = useScrollAnimation(0.3);

  const { sections, hero } = aboutData.en;
  const firstSection = sections[0];
  const remainingSections = sections.slice(1);

  const formatHTML = (content, appendDots = false) => {
    let formatted = content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");

    if (appendDots && !isExpanded) {
      formatted += "...";
    }
    return { __html: formatted };
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${inView ? "start-animation" : ""}`}
    >
      <div className="about__title-box">
        <SectionTitle
          title="About"
          highlight="Me"
          subtitle="A glimpse into my journey. Passionate developer with a creative edge."
        />
      </div>

      <div className="about__wrapper--vertical">
        <div className="about__image-box">
          <img src={aboutImg} alt="Phan Như Nhật" className="about__image" />
        </div>

        <h2 className="about__hero-text">{hero}</h2>

        <div className="about__content">
          <div
            className="about__desc"
            dangerouslySetInnerHTML={formatHTML(firstSection.content, true)}
          />

          <div
            className={`about__expanded-content ${isExpanded ? "about__expanded-content--show" : ""}`}
          >
            {remainingSections.map((section) => (
              <div key={section.id} className="about__item">
                <div
                  className="about__desc-extended"
                  dangerouslySetInnerHTML={formatHTML(section.content)}
                />
              </div>
            ))}
          </div>

          <div className="about__buttons">
            <Button
              className="about__btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
