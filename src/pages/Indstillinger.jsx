import { Link } from "react-router-dom";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";
import logo from "../img/logo.png";
import { FaArrowLeft } from "react-icons/fa";

export default function Indstillinger() {
  return (
    <div className="min-h-screen relative">
      <img
        className="object-cover h-full w-full absolute top-0 left-0 -z-10 lg:hidden"
        src={forside}
        alt=""
      />
      <img
        className="lg:object-cover h-full w-full absolute top-0 left-0 -z-10 hidden lg:block"
        src={forsideWeb}
        alt=""
      />

      <div className="min-h-screen px-5 py-10">
        <div className="flex justify-between items-center text-white text-2xl mb-10 lg:mb-0 lg:px-5">
          <Link to="/Menu">
            <FaArrowLeft />
          </Link>
          <Link to="/Menu">
            <img className="h-10" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="flex justify-center">
          <h1 className="font-ibm text-4xl text-white">Indstillinger</h1>
        </div>

        <div className="md:pb-4 my-0 md:my-0 md:text-left flex-grow lg:w-1/2 lg:mx-auto">
          <div className="font-ibm text-white h-full py-10">
            <a
              href="#"
              to="/change-info"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Change Info
            </a>
            <a
              href="#"
              to="/help"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Help
            </a>
            <a
              href="#"
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </a>
            <a
              href="#"
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </a>
            <a
              href="#"
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </a>
            <a
              href="#"
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
