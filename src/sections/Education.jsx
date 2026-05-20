import SectionTitle from "../components/Common/SectionTitle";
import "@styles/sections/Education.scss";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { educationData } from "../data/educationData";

const Education = () => {
  const { ref, inView } = useScrollAnimation();

  const timelineData = [
    {
      label: "Education",
      items: educationData.education,
    },
    {
      label: "Certifications",
      items: educationData.certifications,
    },
    {
      label: "Awards",
      items: educationData.awards,
    },
    {
      label: "Activities",
      items: educationData.activities,
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className={`education ${inView ? "start-animation" : ""}`}
    >
      <SectionTitle
        title="My"
        highlight="Education"
        subtitle="Academic journey and growth. Building knowledge through study and achievement."
      />

      <div className="education__container">
        {timelineData.map((group) => (
          <div key={group.label} className="education__group">
            <div className="education__group-header">
              <span className="education__label">{group.label}</span>
            </div>

            {group.items.map((item, index) => (
              <div key={index} className="education__item">
                <div className="education__card">
                  {item.period && (
                    <span className="education__period">{item.period}</span>
                  )}

                  <h3 className="education__title">{item.institution}</h3>

                  {item.degree && (
                    <p className="education__subtitle">{item.degree}</p>
                  )}

                  {item.GPA && (
                    <span className="education__gpa">GPA: {item.GPA}</span>
                  )}

                  {item.award && (
                    <p className="education__desc">{item.award}</p>
                  )}
                  <div className="education__activities">
                    {item.activity && (
                      <p className="education__activity">{item.activity}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
