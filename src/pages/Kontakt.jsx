import logo from "../img/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";

import { Link } from "react-router-dom";

export default function Kontakt() {
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

      <div className="text-white px-5 py-10">
        <div className="flex justify-between items-center text-white text-2xl mb-10 lg:mb-0 lg:px-5">
          <Link to="/Menu">
            <FaArrowLeft />
          </Link>
          <Link to="/Menu">
            <img className="h-10" src={logo} alt="logo"></img>
          </Link>
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl text-white">Kontakt</h1>
        </div>
        <div className="flex flex-col items-center pb-5">
          <h1 className="my-10 text-3xl lg:text-5xl lg:mb-20">
            Nysgerrig på noget?
          </h1>
          <p className="lg:w-2/5">
            Her i NSSA arbejder vi med unge atleter, trænere, colleges og
            klubber fra hele verden i forskellige tidszoner. Har du spørgsmål om
            det vi gør, vores klienter eller blot vil vide mere om college og
            hvordan vi måske kan hjælpe dig? Ring eller skriv til os på email og
            vi vil gøre alt vi kan for at være behjælpelige.{" "}
          </p>
          <div className="md:flex md:space-x-20 md:mt-20 ">
            <div className="bg-[#0075BE] flex flex-col items-center justify-between py-4 h-32 w-52 rounded-2xl mt-5 lg:mt-0">
              <h3 className=" text-5xl">
                <FaPhone />
              </h3>
              <h3>+45 26 19 93 28</h3>
            </div>
            <div className="bg-[#0075BE] flex flex-col items-center justify-between py-4 h-32 w-52 my-5 rounded-2xl lg:my-0">
              <h3 className="text-5xl">
                <FaMailBulk />
              </h3>
              <h3>Hello@nssa.dk</h3>
            </div>
            <div className="bg-[#0075BE] flex flex-col items-center justify-between py-4 h-32 w-52 md:mt-5 lg:mt-0 rounded-2xl">
              <h3 className="text-5xl">
                <FaHome />
              </h3>
              <h3>
                Willemoesgade 12 <br></br>2100, København Ø
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
