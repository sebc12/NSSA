import forside from "../../src/img/forside.png";
import forsideWeb from "../../src/img/forside-web.png";
import logo from "../../src/img/logo.png";

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
        src={forsideWeb}
        alt="background"
      />

      <div className="min-h-screen flex flex-col lg:justify-between items-center pb-5">
        <div>
          <img className="mx-auto pt-10 px-10" src={logo} alt="logo"></img>
        </div>

        <form className="flex flex-col text-white mt-52 w-3/4 lg:w-1/4 lg:pb-20">
          <label htmlFor="">E-mail</label>
          <input className="bg-transparent border-b mb-5" type="text" />
          <label htmlFor="">Adgangskode</label>
          <input className="bg-transparent border-b" type="text" />
          <a className="text-center mt-6" href="#">
            Glemt din adgangskode?
          </a>
          <button className="border rounded-lg bg-[#1FB9F1] text-white py-4 mt-10 w-3/5 m-auto">
            Log ind
          </button>
        </form>
      </div>
    </div>
  );
}
