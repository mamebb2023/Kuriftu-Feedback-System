const Footer = () => {
  return (
    <div className="px-7 mt-1 h-20 flex items-center">
      <div className="flex-1 flex justify-between py-2 border-t border-amber-200">
        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-700 text-2xl hover:text-blue-600"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-700 text-2xl hover:text-blue-400"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-700 text-2xl hover:text-pink-500"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-700 text-2xl hover:text-blue-700"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-gray-700 text-2xl hover:text-red-600"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-gray-400 text-sm">&copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
