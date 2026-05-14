import { useState, useEffect } from "react";
const useNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);

      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection, sticky, menuOpen, setMenuOpen };
};

export default useNavbar;
