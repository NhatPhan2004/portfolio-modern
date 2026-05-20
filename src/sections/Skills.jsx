import SectionTitle from "../components/Common/SectionTitle";
import "@styles/sections/Skills.scss";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { technicalSkillsData, softSkillsData } from "../data/skillsData";

const Skills = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  const categories = [
    { title: "Languages", data: technicalSkillsData.languages },
    { title: "Frontend", data: technicalSkillsData.frontend },
    { title: "Backend", data: technicalSkillsData.backend },
    { title: "Database", data: technicalSkillsData.database },
    { title: "Tools", data: technicalSkillsData.tools },
  ];

  return (
    <section
      id="skills"
      className={`skills ${inView ? "start-animation" : ""}`}
      ref={ref}
    >
      <SectionTitle
        title="My"
        highlight="Skills"
        subtitle="Technical expertise and creative problem-solving. Tools and talents that drive results."
      />

      <div className="skills__container">
        <div className="skills__group skills__group--technical">
          <div className="skills__header">
            <span className="skills__label">
              Tech <span>Stack</span>
            </span>
          </div>

          <div className="skills__grid">
            {categories.map((category) => (
              <div key={category.title} className="skills__category">
                <h3 className="skills__category-title">{category.title}</h3>

                <div className="skills__items">
                  {category.data.map((skill) => (
                    <div key={skill.id} className="skills__item">
                      <span className="skills__name">{skill.name}</span>

                      {skill.details && (
                        <div className="skills__mini-tags">
                          <span className="skills__mini-text">
                            {skill.details.join(" • ")}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills__group skills__group--soft">
          <div className="skills__header">
            <span className="skills__label">
              Working <span>Style</span>{" "}
            </span>
          </div>

          <div className="skills__soft-grid">
            {softSkillsData.map((skill) => (
              <div key={skill.id} className="skills__soft-card">
                <div className="skills__soft-content">
                  <div className="skills__soft-title">
                    <span className="skills__soft-icon">✦</span>
                    <h3 className="skills__soft-name">{skill.title}</h3>
                  </div>
                  <p className="skills__soft-desc">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
