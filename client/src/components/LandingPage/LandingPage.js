import React from "react";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

function LandingPage(){
  return(

    <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  )
}

export default LandingPage;