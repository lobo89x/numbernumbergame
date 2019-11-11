import React from "react";
import ScoreList from "../scorelist"; 
import axios from "axios";
import "../../scores/scores.css";
import LeaderHead from "../leaderHead";

class Leaderboard extends React.Component{
    state = {
    scores : [],
    username : "",
    highscore : 0
  };

  componentDidMount() {
    this.loadScores();
  }

  loadScores = (req, res) => {
     axios.get("/leaderboard", {
         username : this.state.username, 
         highscore : this.state.highscore
     })
     .then(res => {
        console.log(res, "test");
        this.setState({scores : res.data});
     });
     
  };



render () {
    console.log(this.state.scores);
    const showUsers = this.state.scores.map(score=> {
        console.log(score.userID.username);

        return (
        <div className = "this2">
            <ScoreList key= {score.userID}username={score.userID.username} highscore={score.highscore}>
            </ScoreList>
        </div>
    )
})

  return (
    <div className = "this4">
      <LeaderHead/>
      <div className = "this3">
          {showUsers}
    </div>
    </div>
  )
}
}

export default Leaderboard;
