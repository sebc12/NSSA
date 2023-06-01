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
    navigate("/NSSA");
  };
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

      <div className="min-h-screen flex flex-col py-10 px-5 lg:px-16">
        <div className="flex justify-between itmes-center mb-10 lg:mb-0">
          <img className=" h-10" src={logo} alt="logo"></img>

          <button
            onClick={handleSignout}
            className="flex items-start  text-3xl text-white"
          >
            <FaSignOutAlt />
          </button>
        </div>
        <div className="flex justify-center mb-20 lg:mb-40">
          <h1 className="font-ibm text-4xl text-white">Atlet</h1>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:my-0 space-x-10 w-full md:w-2/3 md:mx-auto">
          <Link to="/Indstillinger">
            <div
              className="flex-1 border rounded-3xl text-white cursor-pointer  py-3  lg:py-4 flex items-center justify-center h-40 lg:w-96  transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(${settingsBg})`,
                backgroundSize: "cover",
              }}
            >
              <span className="px-4 py-2 rounded-md text-4xl lg:text-5xl">
                Indstillinger
              </span>
            </div>
          </Link>
          <Link to="/Matchmaking">
            <div
              className="flex-1 border rounded-3xl text-white cursor-pointer  py-3  lg:py-4 flex items-center justify-center h-40 lg:w-96 transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url(${matchmakingBg})`,
                backgroundSize: "cover",
              }}
            >
              <span className="px-4 py-2 rounded-md text-4xl lg:text-5xl">
                Find match
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
              <span className="px-4 py-2 rounded-md text-4xl lg:text-5xl">
                Kontakt
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
