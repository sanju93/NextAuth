import User from '@/pages/mongodb/user';

async function handler(req,res){
    let {name,email,password} = req.body;
    
    try{
    let user = await User.findOne({email});
    if (user){
         res.status(201).json({data : user});
    }else{
         user = await User.create({name,email,password});
         res.status(201).json({data : user});
    }
    }catch(err){
      console.log(err);
      res.status(500).json({data : false});
    }
    

}

export default handler;