import React from "react"; 
import {Table} from "react-bootstrap"; 
import "../../scores/scores.css";

function LeaderHead() {
return(  
  <Table style={{width:"30rem" }} className="mx-auto mt-3 border border-success text-white">
  <tbody>
  <tr className = "tableHead"> 
      <td className = "Username">Username</td>
      <td className = "Highscore">Highscore</td>
  </tr>
  </tbody>
  </Table>)

}

export default LeaderHead;


