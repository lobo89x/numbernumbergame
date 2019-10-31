const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const ScoreboardSchema = new Schema ({

    highscore : {
        type : Number, 
        required : true,
        default : 0,
    },
        username: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User"
    }
});

const Scoreboard = mongoose.model("Scoreboard", ScoreboardSchema);

// Export the scoreboard model
module.exports = Scoreboard;