import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, jerseyNumber, age, image}) => {
  return (
    <Card style={{ width: '18rem', margin: '10px'}}>
        <Card.Img variant="top" src={image}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card.Img>
    </Card>
  );
};


// Define default props
// Player.defaultProps = {
//     name: "Unknown Player",
//     team: "Unknown Team",
//     nationality: "Unknown",
//     jerseyNumber: 0,
//     age: 0,
//     image: "https://via.placeholder.com/150"
// };

export default Player;