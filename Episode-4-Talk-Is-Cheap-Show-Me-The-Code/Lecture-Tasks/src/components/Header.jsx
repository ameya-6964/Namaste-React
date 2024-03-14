import logo from "../../public/logo.jpg";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-orange-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="InstaFood Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            InstaFood
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border gap-3 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-orange-600 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 dark:text-white text-xl"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:border-0 md:p-0 dark:text-white text-xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:border-0 md:p-0 dark:text-white text-xl"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:border-0 md:p-0 dark:text-white text-xl"
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
