import logo from "../img/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-slate-500 px-5 text-white px-5 py-10">
      <div className="flex items-center text-white text-2xl lg:px-5">
        <Link to="/Menu">
          <FaArrowLeft />
        </Link>
        <Link to="/Menu" className="mx-auto">
          <img className="h-10" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="flex flex-col items-center pb-5">
        <h1 className="my-10 text-3xl lg:text-5xl lg:mb-20">
          Nysgerrig på noget?
        </h1>
        <p className="lg:w-2/5">
          Her i NSSA arbejder vi med unge atleter, trænere, colleges og klubber
          fra hele verden i forskellige tidszoner. Har du spørgsmål om det vi
          gør, vores klienter eller blot vil vide mere om college og hvordan vi
          måske kan hjælpe dig? Ring eller skriv til os på email og vi vil gøre
          alt vi kan for at være behjælpelige.{" "}
        </p>
        <div className="lg:flex lg:space-x-20 lg:mt-20">
          <div className="bg-[#0075BE] flex flex-col items-center justify-between py-4 h-32 w-52 rounded-2xl mt-5 lg:mt-0">
            <h3 className=" text-5xl">
              <FaPhone />
            </h3>
            <h3>+45 26 19 93 28</h3>
          </div>
          <div className="bg-[#0075BE] flex flex-col items-center justify-between py-4 h-32 w-52 my-5 rounded-2xl lg:my-0">
            <h3 className="  text-5xl">
              <FaMailBulk />
            </h3>
            <h3>Hello@nssa.dk</h3>
          </div>
          <div className="bg-[#0075BE] flex flex-col items-center justify-between py-4 h-32 w-52 rounded-2xl">
            <h3 className="  text-5xl">
              <FaHome />
            </h3>
            <h3>
              Willemoesgade 12 <br></br>2100, København Ø
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
