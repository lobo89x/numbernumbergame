const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const HighscoreSchema = new Schema ({

    highscore : {
        type : Number, 
        required : true,
        default : 0,
    },
        userID: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User"
    }
});

const Highscore = mongoose.model("Highscore", HighscoreSchema);

// Export the scoreboard model
module.exports = Highscore;