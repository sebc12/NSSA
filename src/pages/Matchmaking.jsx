import logo from "../img/logo.png";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";

export default function Matchmaking() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-10">
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
      <div>
        <img className="mx-auto pt-5 h-16" src={logo} alt="logo"></img>
        <h1 className="text-center text-4xl my-10 text-white">
          SPECIFIKATIONER
        </h1>
        <form
          action=""
          className="grid grid-cols-2 gap-x-5 gap-y-10 lg:w-2/6 lg:m-auto"
        >
          <select name="" id="">
            <option className="bg-transparent" value="">
              Spiller status
            </option>
            <option className="bg-transparent" value="">
              Stjerne
            </option>
            <option className="bg-transparent" value="">
              Profil
            </option>
            <option className="bg-transparent" value="">
              Fastmand
            </option>
            <option className="bg-transparent" value="">
              Rotation
            </option>
            <option className="bg-transparent" value="">
              Reserve
            </option>
            <option className="bg-transparent" value="">
              Stoppet
            </option>
          </select>
          <select name="" id="">
            <option value="">Position</option>
            <option value="">ST, LB, LCB</option>
            <option value="">RCB, 7/11, GK</option>
            <option value="">Position</option>
            <option value="">Position</option>
            <option value="">Position</option>
            <option value="">Position</option>
          </select>

          <select name="" id="">
            <option value="">Budget</option>
            <option value="">0-5000 USD</option>
            <option value="">6-8000 USD</option>
            <option value="">9-11000 USD</option>
            <option value="">12-14000 USD</option>
            <option value="">15-18000 USD</option>
            <option value="">19k+ USD</option>
          </select>
          <select name="" id="">
            <option value="">10.5 - 12</option>
            <option value="">8.5 - 10.4</option>
            <option value="">7 - 8.4</option>
            <option value="">4.5 - 6.9</option>
            <option value="">2.1 - 4.4</option>
            <option value="">0 - 2.0</option>
          </select>

          <select name="" id="">
            <option value="">Athletism</option>
            <option value="">Meget atletisk</option>
            <option value="">Over middel</option>
            <option value="">middel</option>
            <option value="">Under middel</option>
            <option value="">Ikke atletisk</option>
            <option value="">Intet</option>
          </select>
          <select name="" id="">
            <option value="">Hold niveau</option>
            <option value="">Superliga / 1 Division</option>
            <option value="">2 Division / Liga Top</option>
            <option value="">3 Division / Liga Midt / Div Top</option>
            <option value="">DS / Liga Bund / Div Midt</option>
            <option value="">KS / SS / JS / Serie 1 / Liga 1 / Øst 1</option>
            <option value="">Ingen betydende CV</option>
          </select>
        </form>
      </div>
      <div className="mx-auto pb-20">
        <button className="rounded-xl px-5 py-2 bg-[#14B9F1] text-white">
          Find matches
        </button>
      </div>
    </div>
  );
}
