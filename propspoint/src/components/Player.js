

import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;


Player.defaultProps = {
    name: "Unknown",
    team: "Unknown",
    nationality: "Unknown",
    jerseyNumber: "Unknown",
    age: "Unknown",
    imageUrl: "https://images.app.goo.gl/DBUyHNLwF7zAsqJU9",
  };
  
