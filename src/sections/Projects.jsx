import SectionTitle from "@components/Common/SectionTitle";
import useScrollAnimation from "@hooks/useScrollAnimation";
import { projectData } from "../data/projectData";
import "@styles/sections/Projects.scss";
import { div } from "framer-motion/client";

const getImageUrl = (name) => {
  return new URL(`../assets/${name.split("/").pop()}`, import.meta.url).href;
};

const Projects = () => {
  const { ref, inView } = useScrollAnimation();

  const featuredProjects = projectData.filter((p) => p.id === 1 || p.id === 2);
  const miniProjects = projectData.filter((p) => p.id > 2);

  return (
    <section
      id="projects"
      className={`projects ${inView ? "start-animation" : ""}`}
      ref={ref}
    >
      <SectionTitle
        title="Personal"
        highlight="Projects"
        subtitle="Turning ideas into impactful solutions.Showcasing innovation through real-world work."
      />
      <div className="projects__container">
        <div className="projects__featured-list">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`projects__featured-card ${index % 2 === 1 ? "projects__featured-card--reverse" : ""}`}
            >
              <div className="projects__featured-img-wrapper">
                <img src={getImageUrl(project.image)} alt={project.title} />
                <div className="projects__featured-overlay"></div>
              </div>
              <div className="projects__featured-info">
                <span className="projects__featured-tag">Featured Project</span>
                <h3 className="projects__featured-title">{project.title}</h3>
                <p className="projects__featured-desc">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link-btn"
                >
                  Live Preview<span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__archive-section">
          <h3 className="projects__archive-heading">
            Other Noteworthy Projects
          </h3>
          <div className="projects__grid">
            {miniProjects.map((project) => (
              <div key={project.id} className="projects__card">
                <div className="projects__card-img-box">
                  <img src={getImageUrl(project.image)} alt={project.title} />
                </div>
                <div className="projects__card-content">
                  <h4 className="projects__card-title">{project.title}</h4>
                  <p className="projects__card-desc"> {project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__card-link"
                  >
                    View Code & Live<span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
