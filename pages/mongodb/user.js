import mongoose from 'mongoose';

import connectToDatabase from "@/pages/mongodb/mongose";

connectToDatabase();

let userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type: String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    }
},{
    timestamps : true
});

let User;
if (mongoose.models.User){
    User = mongoose.models.User;
}else{
    User = mongoose.model('User',userSchema);
}


export default User;