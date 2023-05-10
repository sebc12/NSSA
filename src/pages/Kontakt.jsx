import logo from "../img/logo.png";

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-slate-500 px-5 text-white">
      <div>
        <img className="mx-auto pt-5 px-10 h-16" src={logo} alt="logo"></img>
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
          <div className="bg-[#0075BE] h-32 w-52 rounded-2xl mt-5 lg:mt-0">
            <h3 className="text-center">+45 26 19 93 28</h3>
          </div>
          <div className="bg-[#0075BE] h-32 w-52 my-5 rounded-2xl lg:my-0">
            <h3 className="text-center">Hello@nssa.dk</h3>
          </div>
          <div className="bg-[#0075BE] h-32 w-52 rounded-2xl">
            <h3 className="text-center">
              Willemoesgade 12 <br></br>2100, København Ø
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
