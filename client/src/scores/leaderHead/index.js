import React from "react"; 
import {Table} from "react-bootstrap"; 
import "../../scores/scores.css";

function LeaderHead() {
return(  
  <Table style={{width:"30rem" }} className="mx-auto mt-5 border border-success text-white">
    <thead><u><h1 className="text-center">LeaderBoard</h1></u></thead>
  <tbody>
    
  <tr className = "tableHead"> 
      <td className = "Username">Username</td>
      <td className = "Highscore">Highscore</td>
  </tr>
  </tbody>
  </Table>)

}

export default LeaderHead;


