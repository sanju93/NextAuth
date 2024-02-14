import style from'@/styles/Navbar.module.css';
import Link from 'next/link'
import { hasCookie, deleteCookie } from 'cookies-next';
import context from '../context/context';
import { useEffect, useContext} from 'react';
import {useRouter} from 'next/router';

function Navbar(){


    let router = useRouter();
    let ContextValue = useContext(context);

    useEffect(() => {
     if (hasCookie('session')){
       ContextValue.setLogin(true)
        router.push('/components/profile');
     }else{
        ContextValue.setLogin(false);
     }
    },[])

    function handleLogout(){
        deleteCookie('session');
        ContextValue.setLogin(false);
        router.replace('/');
    }

    return <>
<header className={style.header}>
    <ul className={style.lists}>
       {!ContextValue.login ? <Link className={style.link} href={{pathname : '/'}}> 
         <li className={style.list}>
            Login
        </li>
        </Link> : ""}

      {!ContextValue.login ? <Link  className={style.link} href={{pathname : '/components/SignUp'}}>
        <li className={style.list}>
            SignUp
        </li>
        </Link> : ""}

        
   {ContextValue.login ? <div  className={style.link} onClick={handleLogout}>
        <li className={style.list}>
            Logout
        </li>
    </div> : ""}
    </ul>
</header>
    </>
}

export default Navbar;