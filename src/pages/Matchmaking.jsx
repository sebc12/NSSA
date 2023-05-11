import logo from "../img/logo.png";

export default function Matchmaking() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-500 px-10">
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
          </select>
          <select name="" id="">
            <option value="">Akademisk</option>
          </select>

          <select name="" id="">
            <option value="">Athletism</option>
          </select>
          <select name="" id="">
            <option value="">Hold niveau</option>
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
