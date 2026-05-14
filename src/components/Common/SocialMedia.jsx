import "@fortawesome/fontawesome-free/css/all.min.css";
import "@styles/components/SocialMedia.scss";
const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://facebook.com/nhat.phan.450465"
        style={{ "--vlr": 7 }}
        target="_blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a
        href="https://github.com/NhatPhan2004"
        style={{ "--vlr": 8 }}
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.instagram.com/_nhatphann108_/"
        style={{ "--vlr": 9 }}
        target="_blank"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/phan-nh%C6%B0-nh%E1%BA%ADt-3a43a0361/?trk=opento_sprofile_details"
        style={{ "--vlr": 10 }}
        target="_blank"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
