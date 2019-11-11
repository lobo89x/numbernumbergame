import React from "react";
import "../../scores/scores.css";
import {Table} from "react-bootstrap";

function ScoreList(props) {
  const {username, highscore} = props;
  return (
    <div className= "this1">
    <Table style={{width:"30rem" }} className="mx-auto mt-3 border border-success text-white">

      <tbody className = "dataBody"> 
        <tr className = "dataRows">
          <td className = "username">{username}</td>
          <td className = "highscore">{highscore}</td>
        </tr>
      </tbody>
      </Table>
      </div>
   
  );
}
export default ScoreList;

