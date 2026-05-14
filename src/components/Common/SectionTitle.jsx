import "@styles/components/SectionTitle.scss";

const SectionTitle = ({ title, highlight, subtitle }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">
        {title}{" "}
        <span className="section-title__heading-highlight">{highlight}</span>
      </h2>

      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
