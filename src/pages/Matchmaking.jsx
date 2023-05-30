import logo from "../img/logo.png";
import forside from "../img/forside.png";
import forsideWeb from "../img/forside-web.png";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Modal from "react-modal";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBJE7RELfxwUlkjbEHTbuS5ahokAQbNow4",
  authDomain: "nssa-d6154.firebaseapp.com",
  databaseURL:
    "https://nssa-d6154-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nssa-d6154",
  storageBucket: "nssa-d6154.appspot.com",
  messagingSenderId: "108131157568",
  appId: "1:108131157568:web:7e265abe13e988806f41a5",
};

firebase.initializeApp(firebaseConfig);

export default function Matchmaking() {
  const [isError, setIsError] = useState(false);
  const [schools, setSchools] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState({
    status: "",
    budget: "",
    grades: "",
    atletism: "",
    level: "",
  });

  // Vi henter data. effekten bliver udløst, når værdien af selectedCriteria ændrer sig.

  useEffect(() => {
    fetchDataFromFirebase();
  }, [selectedCriteria]);

  //Henter brugerens input. Vi tager den tidligere værdi af selectedCriteria, og med spredningsoperatoren opretter vi et nyt object.
  //criterion bliver brugt til at opdatere variablerne i selectedCriteria. eksempel "status"

  const handleDropdownChange = (event, criterion) => {
    setSelectedCriteria((prevCriteria) => ({
      ...prevCriteria,
      [criterion]: event.target.value,
    }));
  };

  //Tjekker om brugeren har indtastet noget i input-felterne.
  function validated() {
    let validate = true;
    if (
      selectedCriteria.status === "" ||
      selectedCriteria.budget === "" ||
      selectedCriteria.grades === "" ||
      selectedCriteria.atletism === "" ||
      selectedCriteria.level === ""
    ) {
      validate = false;
    }
    return validate;
  }

  //henter data fra firebase
  const fetchDataFromFirebase = () => {
    const firebaseRef = firebase.database().ref("Schools");

    firebaseRef
      //henter dataene én gang fra Firebase-databasen
      .once("value")
      .then((snapshot) => {
        //returnerer dataene som en JavaScript-objektstruktur
        const firebaseData = snapshot.val();
        //konverterer objektets værdier til et array
        const schoolsArray = firebaseData ? Object.values(firebaseData) : [];

        const filteredSchools = schoolsArray.filter((school) => {
          return (
            school.status <= selectedCriteria.status &&
            school.budget <= selectedCriteria.budget &&
            school.grades <= selectedCriteria.grades &&
            school.atletism <= selectedCriteria.atletism &&
            school.level <= selectedCriteria.level
          );
        });

        return setSchools(filteredSchools);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    if (!validated()) {
      setIsOpen(false);
      setIsError(true);
    } else {
      setIsOpen(true);
    }
    console.log(validated());
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="px-5 py-10">
        <div className="flex items-center text-white text-2xl lg:px-5">
          <Link to="/Menu">
            <FaArrowLeft />
          </Link>
          <Link to="/Menu" className="mx-auto">
            <img className=" h-10" src={logo} alt="logo"></img>
          </Link>
        </div>
        <h1 className="text-center text-4xl my-20 text-white">
          SPECIFIKATIONER
        </h1>
        <form
          action=""
          className="grid grid-cols-2 gap-x-5 gap-y-10 lg:w-2/6 lg:m-auto"
        >
          <select
            className="p-2"
            name=""
            id=""
            onChange={(event) => handleDropdownChange(event, "status")}
          >
            <option value="" disabled selected hidden>
              Spiller status
            </option>
            <option value={6}>Stjerne</option>
            <option value={5}>Profil</option>
            <option value={4}>Fastmand</option>
            <option value={3}>Rotation</option>
            <option value={2}>Reserve</option>
            <option value={1}>Stoppet</option>
          </select>

          <select
            className="p-2"
            name=""
            id=""
            onChange={(event) => handleDropdownChange(event, "budget")}
          >
            <option value="" disabled selected hidden>
              Budget
            </option>
            <option value={19000}>19000+ USD</option>
            <option value={15000}>15-18000 USD</option>
            <option value={12000}>12-14000 USD</option>
            <option value={9000}>9-11000 USD</option>
            <option value={6000}>6-8000 USD</option>
            <option value={5000}>0-5000 USD</option>
          </select>
          <select
            className="p-2"
            name=""
            id=""
            onChange={(event) => handleDropdownChange(event, "grades")}
          >
            <option value="" disabled selected hidden>
              Karakter
            </option>
            <option value={6}>10.5 - 12</option>
            <option value={5}>8.5 - 10.4</option>
            <option value={4}>7 - 8.4</option>
            <option value={3}>4.5 - 6.9</option>
            <option value={2}>2.1 - 4.4</option>
            <option value={1}>0 - 2.0</option>
          </select>

          <select
            className="p-2"
            name=""
            id=""
            onChange={(event) => handleDropdownChange(event, "atletism")}
          >
            <option value="" disabled selected hidden>
              Athletism
            </option>
            <option value={6}>Meget atletisk</option>
            <option value={5}>Over middel</option>
            <option value={4}>middel</option>
            <option value={3}>Under middel</option>
            <option value={2}>Ikke atletisk</option>
            <option value={1}>Intet</option>
          </select>
          <select
            className="p-2"
            name=""
            id=""
            onChange={(event) => handleDropdownChange(event, "level")}
          >
            <option value="" disabled selected hidden>
              Hold niveau
            </option>
            <option value={6}>Superliga / 1 Division</option>
            <option value={5}>2 Division / Liga Top</option>
            <option value={4}>3 Division / Liga Midt / Div Top</option>
            <option value={3}>DS / Liga Bund / Div Midt</option>
            <option value={2}>KS / SS / JS / Serie 1 / Liga 1 / Øst 1</option>
            <option value={1}>Ingen betydende CV</option>
          </select>
        </form>
      </div>
      <div className="flex flex-col w-2/5 mx-auto">
        <button
          className="rounded-xl lg:w-1/3 mx-auto px-5 py-2 bg-[#14B9F1] text-white"
          onClick={openModal}
        >
          Find matches
        </button>
        {isError && <p className="text-center mt-5 ">Udfyld felterne</p>}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <span onClick={closeModal} className="cursor-pointer text-2xl p-3">
          &times;
        </span>
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 lg:px-10 lg:space-y-0 space-y-5 pt-5">
          {schools.map((school) => (
            <div className="border p-5">
              <h1 className="text-3xl mb-3">{school.name}</h1>
              <h3>{school.text}</h3>
            </div>
          ))}
        </div>

        <div className="w-full flex lg:mt-10 mt-5 pb-5">
          <button
            onClick={closeModal}
            className="border rounded-3xl w-full lg:mx-auto lg:w-1/6 py-2 bg-[#14B9F1] text-white"
          >
            Ændre specifikationerne
          </button>
        </div>
      </Modal>
    </div>
  );
}
