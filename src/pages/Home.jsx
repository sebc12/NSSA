import forside from "../../src/img/forside.png";
import forsideWeb from "../../src/img/forside-web.png";
import logo from "../../src/img/logo.png";

export default function Home() {
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

      <div className="min-h-screen flex flex-col lg:justify-between items-center">
        <div>
          <img className="mx-auto pt-10 px-10" src={logo} alt="logo"></img>
        </div>
        <div className="lg:pb-40 my-auto lg:my-0 space-x-10">
          <button className="border rounded-lg bg-[#1FB9F1] text-white px-12 py-4">
            Login
          </button>
          <button className="border rounded-lg bg-white text-[#021965] px-12 py-4">
            Opret
          </button>
        </div>
      </div>
    </div>
  );
}
