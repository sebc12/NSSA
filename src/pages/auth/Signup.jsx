import { Link, useNavigate } from "react-router-dom";
import forside from "../../img/forside.png";
import { useState } from "react";

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
    if (password.length < 5) {
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

    if (result.error) {
      setIsError((prevState) => ({ ...prevState, valid: true }));
      return;
    }
    navigate("/signin");
  };
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
          <label htmlFor="">Fornavn & efternavn</label>
          <input
            className="bg-transparent border-b mb-5"
            type="text"
            onChange={handleName}
            required
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
