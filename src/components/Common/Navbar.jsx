import "@styles/components/Navbar.scss";
import useNavbar from "@hooks/useNavbar";
const Navbar = () => {
  const { activeSection, sticky, menuOpen, setMenuOpen } = useNavbar();

  return (
    <header className={`navbar ${sticky ? "navbar--sticky" : ""}`}>
      <a href="#home" className="navbar__logo">
        Bluesolis<span>Dev</span>
      </a>

      <div
        id="menu"
        className={menuOpen ? "bx bx-x" : "bx bx-menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>

      <nav className={`navbar__menu ${menuOpen ? "navbar__menu--active" : ""}`}>
        <a
          href="#home"
          style={{ "--vlr": 1 }}
          className={`navbar__link ${activeSection === "home" ? "navbar__link--active" : ""}`}
        >
          Home
        </a>

        <a
          href="#projects"
          style={{ "--vlr": 2 }}
          className={`navbar__link ${activeSection === "projects" ? "navbar__link--active" : ""}`}
        >
          Projects
        </a>

        <a
          href="#about"
          style={{ "--vlr": 3 }}
          className={`navbar__link ${activeSection === "about" ? "navbar__link--active" : ""}`}
        >
          About Me
        </a>

        <a
          href="#education"
          style={{ "--vlr": 4 }}
          className={`navbar__link ${activeSection === "education" ? "navbar__link--active" : ""}`}
        >
          Education
        </a>

        <a
          href="#skills"
          style={{ "--vlr": 5 }}
          className={`navbar__link ${activeSection === "skills" ? "navbar__link--active" : ""}`}
        >
          Skills
        </a>

        <a
          href="#contact"
          style={{ "--vlr": 6 }}
          className={`navbar__link ${activeSection === "contact" ? "navbar__link--active" : ""}`}
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
