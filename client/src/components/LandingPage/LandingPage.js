import React from "react";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

function LandingPage(){
  return(

    <Card style={{width:"40rem"}} className="mx-auto mt-3 border border-success">
  <Card.Header className="text-center"><h1>Welcome to NumberNauts</h1></Card.Header>
  <Card.Body>
    {/* <Card.Title className="text-white"><h2>Sign Up Below</h2></Card.Title> */}
    <Card.Text className="text-white">
        <p> FIRST THINGS FIRST! Create a Username and Password so we can remember you and save your Hi-Scores!</p>
        <br></br>
      <ul>
        <h2>How NumberNauts Works</h2>
       <li>You will be given one math question for each level.</li> 
        <li>Each level will be filled with numbers in a 5x6 grid </li>
        <li>Use the arrow keys to move your NumberNaut around the grid</li>
        <li>Once you have moved to a numbered space that meets the question requirement, hit space bar to destroy the number</li>
        <li>You will have five minutes and three lives to complete each level</li>
        <li>Each level will increase in difficulty, DONT GIVE UP!</li>
      </ul>
      <br>
      </br>
    </Card.Text>
    <Button className="ml-4" href="Login" variant="success">Login Here</Button>
    <Button className="float-right mr-4" href="Login" variant="success">Create Account</Button>
    
  </Card.Body>
</Card>

  )
}

export default LandingPage;