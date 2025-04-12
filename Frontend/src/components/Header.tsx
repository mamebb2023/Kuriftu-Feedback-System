import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full px-7 h-20 flex items-center justify-between gap-3 transition-all duration-300 z-50 ${
        scrolled ? "bg-white/50 backdrop-blur-sm" : ""
      }`}
    >
      <div className="flex-1 flex items-center justify-center">
        <img src="./src/assets/logo.png" alt="Logo" />
      </div>
      <nav>
        <a href="/feedback" className="font-bold">
          Feedback
        </a>
      </nav>
    </div>
  );
};

export default Header;
