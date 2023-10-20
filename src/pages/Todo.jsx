import React, { useState, useEffect } from 'react';
import Header from '../utils/Header';
import '../App.css';
import '../assets/Todo.css';
import Notodo from '../componenets/Notodo';
import IsTodo from '../componenets/Todo';
import Infotodo from '../componenets/Infotodo';
import New from './New';
import { getStorage } from '../functions/localstorage';
import axios from 'axios';
import { endpoint, mainroute } from '../functions/endpoint';

export default function Todo() {
  const storage = JSON.parse(getStorage());
  const [isinnew, setisinnew] = useState(false);
  const [user, setuser] = useState(null);
  const [data, setdata] = useState(null);
  const [isloading, setisloading] = useState(true);

  const signature = () => {
    const sign = localStorage.getItem('signature');
    return sign !== null ? JSON.parse(sign).signature : null;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (signature() !== null) {
        try {
          const url = endpoint + mainroute + `?signature=${signature()}`;
          const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          });
          setdata(response.data.data);
          setuser(true);
        } catch (err) {
          console.log(err);
          setuser(false);
        } finally {
          setisloading(false);
        }
      } else {
        setisloading(false);
        setuser(false)
      }
    };

    fetchData();
  }, []); 

  const istodo = storage && storage.todo.length !== 0 ? true : false; 
  const isLoadingText = isloading ? null :
   <Infotodo dir={user !== false ? 'user' : null} data={data}  />;

  return (
    <>
      {isinnew === true ? <New click={() => setisinnew(false)} /> : null}
      <section>
        <Header dir={user !== false ? 'user' : null} data={data} isloading={isloading} />
        {istodo  === true ? (
          <>
            {isLoadingText}
            <IsTodo data={storage} setnew={() => setisinnew(true)} />
          </>
        ) : (
          <Notodo setnew={() => setisinnew(true)} />
        )}
      </section>
    </>
  );
}
