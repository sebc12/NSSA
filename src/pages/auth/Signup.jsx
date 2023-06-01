import { Link, useNavigate } from "react-router-dom";
import forside from "../../img/forside.png";
import forsideWeb from "../../img/forside-web.png";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../img/logo.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    password: false,
    valid: false,
  });

  //vi henter det der bliver skrivet i vores SignUp form
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  function verifyEmail(email) {
    return /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email);
  }

  //Vi tjekker om der er nogle fejl. Hvis der er fejl i "name", så bliver det sat til true.
  //Vi bruger ...prevstate, så vi ikke ændre i andre variabler i "isError"

  function checkForm() {
    resetError();
    let validated = true;
    if (name === "") {
      setIsError((prevState) => ({ ...prevState, name: true }));
      validated = false;
    }
    if (!verifyEmail(email)) {
      setIsError((prevState) => ({ ...prevState, email: true }));
      validated = false;
    }
    if (password.length <= 5) {
      setIsError((prevState) => ({ ...prevState, password: true }));
      validated = false;
    }

    return validated;
  }

  function resetError() {
    setIsError((prevState) => ({
      ...prevState,
      name: false,
      email: false,
      password: false,
      valid: false,
    }));
  }

  const handleSignup = async (event) => {
    event.preventDefault();
    const validated = checkForm();
    if (!validated) {
      return;
    }

    // call firebase
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJE7RELfxwUlkjbEHTbuS5ahokAQbNow4",
      {
        method: "POST",
        body: JSON.stringify({
          displayName: name,
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    const result = await response.json();
    console.log(result);

    //Hvis der sker en fejl, eksempel, at mail er optaget, så får vi en fejl
    if (result.error) {
      setIsError((prevState) => ({ ...prevState, valid: true }));
      return;
    }
    navigate("/signin");
  };
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
      <div className="flex lg:justify-between items-center text-white text-3xl mx-5 pt-5 lg:mx-10 lg:pt-10 ">
        <div>
          <Link to="/NSSA">
            <FaArrowLeft />
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link to="/Menu">
            <img className="h-10" src={logo} alt="logo"></img>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="font-ibm text-4xl text-white">OPRET BRUGER</h1>
      </div>
      <div className="pt-5 flex justify-center">
        <form
          action=""
          className="font-ibm px-5 py-5 flex flex-col text-white mt-20 lg:w-2/5 lg:mx-auto"
        >
          <label htmlFor="">Fornavn & efternavn</label>
          <input
            className="bg-transparent border-b mb-5"
            type="text"
            onChange={handleName}
          />
          {isError.name && <p className="text-black">Skal udfyldes</p>}

          <label htmlFor="">E-Mail</label>
          <input
            className="bg-transparent border-b mb-5"
            type="text"
            onChange={handleEmail}
            required
          />
          {isError.email && (
            <p className="text-black">Email har ikke korrekt format</p>
          )}
          <label htmlFor="">Adgangskode</label>
          <input
            className="bg-transparent border-b mb-5"
            type="password"
            onChange={handlePassword}
            required
          />
          {isError.password && (
            <p className="text-black">Adgangskoden skal være min. 6 tegn</p>
          )}
          {isError.valid && (
            <p className="text-black">Email er ikke ledig. Prøv en anden.</p>
          )}
          <button
            onClick={handleSignup}
            className="border rounded-lg bg-[#1FB9F1] text-white px-10 py-3 w-3/5 mt-10 m-auto lg:px-12 lg:py-4"
          >
            Fortsæt
          </button>
        </form>
      </div>
    </div>
  );
}
