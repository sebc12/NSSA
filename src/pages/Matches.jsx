import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import forside from '../img/forside.png';
import forsideWeb from '../img/forside-web.png';
import logo from '../img/logo.png';
import { transformToArray } from '../firebase-utils';

const url =
  'https://nssa-d6154-default-rtdb.europe-west1.firebasedatabase.app/.json';

export default function Matches() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      if (response.status === 200) {
        const body = await response.json();
        const asArray = transformToArray(body);
        console.log(asArray);
      }
    }

    getData();
  }, []);

  const handleData = () => {
    console.log('getData');
  };

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
        <button onClick={handleData}>tarik</button>
        <Link to="/">
          <img src={logo} alt="logo" className="w-64 h-24 mt-8" />
        </Link>
      </div>
    </div>
  );
}
