import style from "@/styles/login.module.css";
import { useState, useContext} from "react";
import { useRouter } from "next/router";
import context from '@/pages/context/context';


function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let ContextValue = useContext(context);
  let router = useRouter();


async function handleSubmit(e) {
    e.preventDefault();
   let res = await fetch("/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 201){
      let data = await res.text();
      console.log(data);
      setEmail("");
      setPassword("");
      ContextValue.setLogin(true);
      router.push('/components/profile');
      

    }

    

  
  }

  return (
    <>
      <main className={style.formContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className={style.dataBox}
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter your password"
            className={style.dataBox}
          />
          <input className={style.dataBox} type="submit" value="Login" />
        </form>
      </main>
    </>
  );
}

export default Login;
