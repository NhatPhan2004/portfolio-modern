import SectionTitle from "../components/Common/SectionTitle";
import "@styles/sections/Skills.scss";
import useScrollAnimation from "../hooks/useScrollAnimation";
const Skills = () => {
  const { ref, inView } = useScrollAnimation();
  return (
    <section
      id="skills"
      className={`education ${inView ? "start-animation" : ""}`}
      ref={ref}
    >
      <SectionTitle
        title="My"
        highlight="Skills"
        subtitle="Technical expertise and creative problem-solving. Tools and talents that drive results."
      />
    </section>
  );
};

export default Skills;
