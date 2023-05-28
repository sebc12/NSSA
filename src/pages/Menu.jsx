import { Link, useNavigate } from "react-router-dom";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";
import logo from "../img/logo.png";
import matchmakingBg from "../img/forside-web.png";
import settingsBg from "../img/forside-web.png";
import contactBg from "../img/forside-web.png";

export default function Menu(token) {
  const navigate = useNavigate();
  const isLoggedIn = token;

  if (token == "") {
    // Redirect to the login page or show an access denied message
    return navigate("/Signin");
    // Alternatively, you can render an access denied component
    // return <AccessDenied />;
  }

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

      <div className="min-h-screen flex flex-col lg:justify-between items-center pt-5">
        <div>
          <img className="mx-auto h-10" src={logo} alt="logo"></img>
        </div>
        <div className="lg:pb-20 pt-10 lg:my-0 space-x-10 w-full lg:w-2/5 px-5">
          <Link to="/Matchmaking">
            <div
              className="flex-1 border rounded-3xl text-white cursor-pointer px-5 py-3 lg:px-12 lg:py-4 flex items-center justify-center h-40  transition duration-300 ease-in-out transform hover:scale-105"
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
              className="flex-1 border rounded-3xl text-white cursor-pointer px-5 py-3 lg:px-12 lg:py-4 flex items-center justify-center h-40  transition duration-300 ease-in-out transform hover:scale-105"
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
              className="flex-1 border rounded-3xl text-white cursor-pointer px-5 py-3 lg:px-12 lg:py-4 flex items-center justify-center h-40  transition duration-300 ease-in-out transform hover:scale-105"
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
