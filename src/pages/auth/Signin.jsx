import { Link, useNavigate } from "react-router-dom";
import forside from "../../img/forside.png";
import forsideWeb from "../../img/forside-web.png";
import logo from "../../img/logo.png";
import { useState } from "react";

export default function Home(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    password: false,
    valid: false,
  });

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
      setIsError((prevState) => ({ ...prevState, valid: true }));
      return;
    }
    props.setToken(result.idToken);
    console.log(props.setToken);
    navigate("/Menu");
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
        src={forsideWeb}
        alt="background"
      />
      <div>
        <Link to="/">
          <button>Tilbage</button>
        </Link>
      </div>

      <div className=" flex flex-col  items-center ">
        <div>
          <img className="mx-auto pt-4 mb-32" src={logo} alt="logo"></img>
        </div>

        <form className="flex flex-col text-white w-3/4 lg:w-1/4 lg:pb-20">
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
          {isError.valid && (
            <p className="text-black">Forkert email eller kode</p>
          )}
          <a className="text-center mt-6" href="#">
            Glemt din adgangskode?
          </a>

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
