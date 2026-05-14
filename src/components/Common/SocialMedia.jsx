import "@fortawesome/fontawesome-free/css/all.min.css";
import "@styles/components/SocialMedia.scss";
const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://facebook.com/nhat.phan.450465" target="_blank">
        <i className="fa-brands fa-facebook" style={{ "--vlr": 7 }}></i>
      </a>
      <a href="https://github.com/NhatPhan2004" target="_blank">
        <i className="fa-brands fa-github" style={{ "--vlr": 8 }}></i>
      </a>
      <a href="https://www.instagram.com/_nhatphann108_/" target="_blank">
        <i className="fa-brands fa-instagram" style={{ "--vlr": 9 }}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/phan-nh%C6%B0-nh%E1%BA%ADt-3a43a0361/?trk=opento_sprofile_details"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin" style={{ "--vlr": 10 }}></i>
      </a>
    </div>
  );
};

export default SocialMedia;
