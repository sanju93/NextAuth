import { useState } from "react";
import Head from "next/head";
import style from "@/styles/login.module.css";
import { useRouter } from "next/router";
function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try{
      let res = await fetch('/api/Register',{
        method : "POST",
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify({name,email,password})
      });

      if (res.status === 201){
        setName("")
        setEmail("");
        setPassword("")
        router.replace('/');
        
      }

      let data = await res.json();

      console.log(data);
      

    
    }catch(err){

      router.reload();

      console.log(err);

    }

  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <main className={style.formContainer}>
        <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
          <input
            className={style.dataBox}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name"
          />
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
          <input type="submit" value="SignUp" className={style.dataBox} />
        </form>
      </main>
    </>
  );
}

export default SignUp;
