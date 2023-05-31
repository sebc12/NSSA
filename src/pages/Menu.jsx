import { Link, useNavigate } from "react-router-dom";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";
import logo from "../img/logo.png";
import matchmakingBg from "../img/forside-web.png";
import settingsBg from "../img/forside-web.png";
import contactBg from "../img/forside-web.png";
import { FaSignOutAlt } from "react-icons/fa";

export default function Menu() {
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.clear();
    navigate("/");
  };
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

      <div className="min-h-screen flex flex-col pt-5 px-5 lg:px-16">
        <div className="flex mb-40">
          <img className="mx-auto lg:px-10 " src={logo} alt="logo"></img>

          <button
            onClick={handleSignout}
            className="flex items-start lg:pt-10 text-3xl text-white"
          >
            <FaSignOutAlt />
          </button>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:my-0 space-x-10 w-full md:w-2/3 md:mx-auto">
          <Link to="/Matchmaking">
            <div
              className="flex-1 border rounded-3xl text-white cursor-pointer  py-3  lg:py-4 flex items-center justify-center h-40 lg:w-96 transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(${matchmakingBg})`,
                backgroundSize: "cover",
              }}
            >
              <span className="px-4 py-2 rounded-md text-5xl">MATCHMAKING</span>
            </div>
          </Link>
          <Link to="/Indstillinger">
            <div
              className="flex-1 border rounded-3xl text-white cursor-pointer  py-3  lg:py-4 flex items-center justify-center h-40 lg:w-96  transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(${settingsBg})`,
                backgroundSize: "cover",
              }}
            >
              <span className="px-4 py-2 rounded-md text-5xl">
                INDSTILLINGER
              </span>
            </div>
          </Link>
          <Link to="/Kontakt">
            <div
              className="flex-1 border rounded-3xl text-white cursor-pointer  py-3  lg:py-4 flex items-center justify-center h-40 lg:w-96 transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(${contactBg})`,
                backgroundSize: "cover",
              }}
            >
              <span className="px-4 py-2 rounded-md text-5xl">KONTAKT</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
