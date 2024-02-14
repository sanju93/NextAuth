
import User from "../mongodb/user";
import {setCookie} from 'cookies-next';


async function handler(req,res) {
    let {email,password} = req.body;

     
    //check in the database wheather user exist or not

    try{

        let user = await User.findOne({email});
        if (user){
            if (user.password == password){
                //create session

                    setCookie("session",user,{req,res,maxAge : 24 * 6 * 60});
               

                    res.status(201).end("Aunthenticated");
             
            
              
            }else{
                return res.status(401).end("UnAuthenticated");
            }
        }else{
            res.status(400).end("Bad request user haven't registered");
        }

    }catch(err){
        console.log(err);

        res.status(500).end("Internal server Error");

    }
  

}

export default handler;