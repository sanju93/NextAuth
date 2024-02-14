import mongoose from 'mongoose';




let connection;

async function connectToDatabase(){


           await mongoose.connect('mongodb://localhost:27017/Auth')
         
          
        

   
  
    
}


export default connectToDatabase;