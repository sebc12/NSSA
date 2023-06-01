import { Link, useNavigate } from "react-router-dom";
import forside from "../../img/forside.png";
import forsideWeb from "../../img/forside-web.png";
import logo from "../../img/logo.png";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [mailError, setMailError] = useState(false);

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

  const handleSignin = async (event) => {
    event.preventDefault();

    const validated = checkForm();
    if (!validated) {
      return;
    }
    // call firebase
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJE7RELfxwUlkjbEHTbuS5ahokAQbNow4",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    const result = await response.json();
    console.log(result);

    if (result.error) {
      setMailError(true);
      return;
    }

    localStorage.setItem("token", result.idToken);

    navigate("/Menu");
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
      <div className="flex items-center text-white text-2xl mx-10 pt-10 mb-40 lg:px-5">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <Link to="/Menu" className="w-full flex justify-center mr-6">
          <img className="px-10" src={logo} alt="logo"></img>
        </Link>
      </div>

      <div className="flex flex-col items-center ">
        <form className="font-ibm flex flex-col text-white w-3/4 lg:w-1/4 ">
          <label htmlFor="">E-mail</label>
          <input
            className="bg-transparent border-b mb-5"
            type="text"
            onChange={handleEmail}
          />
          {isError.email && (
            <p className="text-black">Email har ikke korrekt format</p>
          )}
          <label htmlFor="">Adgangskode</label>
          <input
            className="bg-transparent border-b"
            type="password"
            onChange={handlePassword}
          />
          {isError.password && (
            <p className="text-black">Adgangskoden skal være min. 6 tegn</p>
          )}
          {mailError && <p className="text-black">Forkert email eller kode</p>}

          <button
            onClick={handleSignin}
            className="mx-auto border rounded-lg bg-[#1FB9F1] text-white py-4 mt-10 w-3/5 "
          >
            Log ind
          </button>
        </form>
      </div>
    </div>
  );
}
