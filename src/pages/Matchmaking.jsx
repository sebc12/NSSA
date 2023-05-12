import logo from "../img/logo.png";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";
import { useState, useEffect } from "react";
import { transformToArray } from "../firebase-utils";

const url =
  "https://nssa-d6154-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function Matchmaking() {
  const [status, setStatus] = useState("");
  const [position, setPosition] = useState("");
  const [budget, setBudget] = useState("");
  const [grades, setGrades] = useState("");
  const [atletism, setAtletism] = useState("");
  const [level, setLevel] = useState("");
  const [test, setTest] = useState("");
  const [showmatch, setShowmatch] = useState("");

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);
      setMatches(asArray);
      console.log(asArray);
    }
    getData();
  }, []);

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleBudget = (event) => {
    setBudget(event.target.value);
  };
  const handleGrades = (event) => {
    setGrades(event.target.value);
  };

  const handleAtletism = (event) => {
    setAtletism(event.target.value);
  };

  const handleLevel = (event) => {
    setLevel(event.target.value);
    console.log(event.target.value);
  };

  function validateMatch(match) {
    // Vi starter med at finde alle bookinger, der har samme lokale som den ønskede booking
    const isMatch = matches.filter((setMatches) => {
      return (
        setMatches.Atletism == matches.Atletism &&
        setMatches.Budget == matches.Budget &&
        setMatches.Postition == matches.Postition
      );
    });

    // vi får et array tilbage
    if (isMatch.length === 0) {
      // Hvis den IKKE ER dobbelt booket
      return false;
    } else {
      // Hvis den ER dobbelt.
      return true;
    }
  }

  const handleMatch = async (event) => {
    event.preventDefault();
    let match = {
      status: status,
      budget: budget,
      position: position,
      grades: grades,
      atletism: atletism,
      level: level,
    };

    if (validateMatch(match)) {
      return setShowmatch(true);
    }
  };
  console.log(handleMatch());

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <img
          className="object-cover bg-no-repeat h-screen w-screen absolute -z-10 lg:hidden"
          src={forside}
          alt=""
        />
        <img
          className="lg:object-cover lg:bg-center lg:bg-no-repeat lg:h-screen lg:w-full lg:absolute  lg:-z-10 hidden lg:block"
          src={forsideWeb}
          alt=""
        />
      </div>
      <div className="px-10">
        <img className="mx-auto pt-5 h-16" src={logo} alt="logo"></img>
        <h1 className="text-center text-4xl my-10 text-white">
          SPECIFIKATIONER
        </h1>
        <form
          action=""
          className="grid grid-cols-2 gap-x-5 gap-y-10 lg:w-2/6 lg:m-auto"
        >
          <select name="" id="" default="Position" onChange={handleStatus}>
            <option value="status">Spiller status</option>
            <option value="Stjerne">Stjerne</option>
            <option value="Profil">Profil</option>
            <option value="Fastmand">Fastmand</option>
            <option value="Rotation">Rotation</option>
            <option value="Reserve">Reserve</option>
            <option value="Stoppet">Stoppet</option>
          </select>
          <select name="" id="" default="Position" onChange={handlePosition}>
            <option value="ST, LB, LCB">ST, LB, LCB</option>
            <option value="RCB, 7/11, GK">RCB, 7/11, GK</option>
            <option value="Position">Position</option>
            <option value="Position">Position</option>
            <option value="Position">Position</option>
            <option value="Position">Position</option>
          </select>

          <select name="" id="" default="Position" onChange={handleBudget}>
            <option value="Budget">Budget</option>
            <option value="0-5000 USD">0-5000 USD</option>
            <option value="6-8000 USD">6-8000 USD</option>
            <option value="9-11000 USD">9-11000 USD</option>
            <option value="12-14000 USD">12-14000 USD</option>
            <option value="15-18000 USD">15-18000 USD</option>
            <option value="19000+ USD">19000+ USD</option>
          </select>
          <select name="" id="" default="Position" onChange={handleGrades}>
            <option value="10.5 - 12">10.5 - 12</option>
            <option value="8.5 - 10.4">8.5 - 10.4</option>
            <option value="7 - 8.4">7 - 8.4</option>
            <option value="4.5 - 6.9">4.5 - 6.9</option>
            <option value="2.1 - 4.4">2.1 - 4.4</option>
            <option value="0 - 2.0">0 - 2.0</option>
          </select>

          <select name="" id="" default="Position" onChange={handleAtletism}>
            <option value="Athletism">Athletism</option>
            <option value="Meget atletisk">Meget atletisk</option>
            <option value="Over middel">Over middel</option>
            <option value="middel">middel</option>
            <option value="Under middel">Under middel</option>
            <option value="Ikke atletisk">Ikke atletisk</option>
            <option value="Intet">Intet</option>
          </select>
          <select name="" id="" default="Position" onChange={handleLevel}>
            <option value="Hold niveau">Hold niveau</option>
            <option value="Superliga / 1 Division">
              Superliga / 1 Division
            </option>
            <option value="2 Division / Liga Top">2 Division / Liga Top</option>
            <option value="3 Division / Liga Midt / Div Top">
              3 Division / Liga Midt / Div Top
            </option>
            <option value="DS / Liga Bund / Div Midt">
              DS / Liga Bund / Div Midt
            </option>
            <option value="KS / SS / JS / Serie 1 / Liga 1 / Øst 1">
              KS / SS / JS / Serie 1 / Liga 1 / Øst 1
            </option>
            <option value="Ingen betydende CV">Ingen betydende CV</option>
          </select>
        </form>
      </div>
      <div className="mx-auto pb-20">
        <button
          className="rounded-xl px-5 py-2 bg-[#14B9F1] text-white"
          onClick={handleMatch}
        >
          Find matches
        </button>
      </div>
      {showmatch && <p>Lokalet er desværre optaget. Prøv et andet.</p>}
    </div>
  );
}
