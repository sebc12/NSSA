import { Link } from "react-router-dom";

import forside from "../../img/forside.png";

export default function Home() {
  return (
    <div>
      <img
        className="bg-cover bg-no-repeat min-h-screen min-w-screen absolute -z-10 lg:hidden"
        src={forside}
        alt="background"
      />
      <img
        className="lg:object-cover lg:bg-center lg:bg-no-repeat lg:h-full lg:w-full lg:absolute  lg:-z-10 hidden lg:block"
        src={forside}
        alt="background"
      />
      <div>
        <Link to="/">
          <button>Tilbage</button>
        </Link>
      </div>
      <div className="pt-10">
        <div className="w-full flex justify-center text-4xl text-white">
          <h1>OPRET BRUGER</h1>
        </div>
        <form
          action=""
          className="px-5 py-5 flex flex-col text-white mt-40 lg:w-2/5 lg:mx-auto"
        >
          <div className="flex justify-between lg:space-x-10">
            <div className="flex flex-col w-40 lg:w-1/2">
              <label htmlFor="">Fornavn</label>
              <input className="bg-transparent border-b" type="text" />
            </div>
            <div className="flex flex-col w-40 lg:w-1/2">
              <label htmlFor="">Efternavn</label>
              <input className="bg-transparent border-b mb-5" type="text" />
            </div>
          </div>
          <label htmlFor="">E-Mail</label>
          <input className="bg-transparent border-b mb-5" type="text" />
          <label htmlFor="">Adgangskode</label>
          <input className="bg-transparent border-b mb-5" type="password" />
          <button className="border rounded-lg bg-[#1FB9F1] text-white px-10 py-3 w-3/5 mt-10 m-auto lg:px-12 lg:py-4">
            Fortsæt
          </button>
        </form>
      </div>
    </div>
  );
}
