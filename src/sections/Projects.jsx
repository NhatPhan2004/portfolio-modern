import SectionTitle from "../components/Common/SectionTitle";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "@styles/sections/Projects.scss";
const Projects = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      id="projects"
      className={`education ${inView ? "start-animation" : ""}`}
      ref={ref}
    >
      <SectionTitle
        title="Personal"
        highlight="Projects"
        subtitle="Turning ideas into impactful solutions.Showcasing innovation through real-world work."
      />
    </section>
  );
};

export default Projects;
