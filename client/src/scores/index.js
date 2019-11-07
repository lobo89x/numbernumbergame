import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import "./scores.css";

//in whatever component renders our "Scores" component, 
//we want to make the axios.get /leaderboard call, and update state with
//whatever leaderboard records we get from the database. (this.setState({leaderboardArray: res.data.leaderBoardRecords}))
//then, when we call the render() method and render a Scores component, 
//we would do something like (IN OUR OTHER COMPONENT):
// <Scores leaderboard=this.state.leaderboardArray />
function Scores(props) {
  let scoreArr = []

  getHighscore (req, res => {
    axios
    .get("/leaderboard"
    ).then(res => {
      console.log (res.data)
    }).then(scoreArr.push(res.data))
  })

  return props.leaderboard.map(leaderboardItem => (
    <div className="row">
      <div className = "col-sm-3">
      </div>
      <div className = "col-sm-6">
      </div>
      <div className = "col-sm-3">
      </div>
    </div>
  )
  )

  // );
}

export default Scores;
