import SectionTitle from "../components/Common/SectionTitle";
import "@styles/sections/Education.scss";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Education = () => {
  const { ref, inView } = useScrollAnimation();

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
    </section>
  );
};

export default Education;
