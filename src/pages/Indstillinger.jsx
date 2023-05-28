import { Link } from "react-router-dom";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";
import logo from "../img/logo.png";
import { FaArrowLeft } from "react-icons/fa";

export default function Indstillinger() {
  return (
    <div className="min-h-screen">
      <div>
        <img
          className="object-cover bg-left bg-no-repeat h-full w-full absolute -z-10 lg:hidden"
          src={forside}
          alt=""
        />
        <img
          className="lg:object-cover lg:bg-center lg:bg-no-repeat lg:h-full lg:w-full lg:absolute  lg:-z-10 hidden lg:block"
          src={forsideWeb}
          alt=""
        />
      </div>

      <div className="min-h-screen px-5 py-10">
        <div className="flex items-center text-white text-2xl lg:px-5">
          <Link to="/Menu">
            <FaArrowLeft />
          </Link>
          <Link to="/Menu" className="mx-auto">
            <img className="h-10" src={logo} alt="logo"></img>
          </Link>
        </div>

        <div className="md:pb-4 my-0 md:my-0 md:text-left flex-grow lg:w-1/2 lg:mx-auto">
          <div className="text-white h-full py-10">
            <Link
              to="/change-info"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Change Info
            </Link>
            <Link
              to="/help"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Help
            </Link>
            <Link
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </Link>
            <Link
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </Link>
            <Link
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </Link>
            <Link
              to="/feedback"
              className="block text-white hover:text-gray-300 font-bold text-xl border-b-2 border-gray-300 py-4"
            >
              Give Us Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
