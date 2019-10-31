const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema ({

    username : {
        type :  String, 
        required : true,
        unique : [true, "Username already exists."]
    },

    password : {
        type : String, 
        required : true 
    }, 
    
    highscore : {
        type : Schema.Types.ObjectId, 
        ref: "Scoreboard" 
    }
});

UserSchema.methods = {
    checkPassword : function (inputPassword){
        console.log (inputPassword, this.password, bcrypt.compareSync(inputPassword, this.password));
        return bcrypt.compareSync(inputPassword, this.password)
    }, 
    hashPassword : plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

UserSchema.pre("save", function (next){
    if (!this.password) {
        console.log("model/user.js ##NO PASSWORD PROVIDED##")
        next()
    }
    else {
        this.password = this.hashPassword(this.password);
        next()
    }
})


const User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;