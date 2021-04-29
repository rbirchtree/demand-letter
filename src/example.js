import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Example() {
    
    const [fName, setfName] = useState('John');
    const [selected, setSelected] = React.useState("");
    const [lName, setlName] = useState('Smith');
    const [phoneNumber, setPhoneNumber] = useState('Birch');
    const [email, setEmail] = useState('bill@gmail.com');
    const [speed, setSpeed] = useState('50');
    const [speedD, setSpeedD] = useState('30');
    const [town,setTown] = useState('Austin, TX');
    const [trips,setRehabTrips] = useState('30');
    const [time,setRehabTime] = useState('1');
    const [dateOfAccident,setDate] = useState('4/1/2020');
    const [dateOfRecovery,setRecoverDate] = useState('6/1/2020');
    const [hourly, setHourlyIncome] = useState(0);

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };
    
  const handleSubmit = (evt) =>{
      evt.preventDefault();
    const doc = new jsPDF();
    doc.text(fName+" "+lName + " "+ phoneNumber, 30, 10);
    doc.text(town, 20, 20);
    doc.text("On " + dateOfAccident +" I was involved in a "+ selected +" collision at "+speedD +" miles per a hour.", 10, 30);
    doc.text("I recovered on " + dateOfRecovery+ " after"+ +"visits to rehab", 10, 50);
    
    doc.save("a4.pdf");
  };
  
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1>Demand Letter</h1>
      </Jumbotron>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
          <select onChange={changeSelectOptionHandler}>
              <option>rearend</option>
              <option>headon</option>
              <option>sideswipe</option>
              <option>T-bone</option>
          </select>
          </Col>
          <Col>
            <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
          </Col>
          </Row>
          <Row>
          <Col>
            <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
          </Col>
          <Col>
            <input type="text" placeholder="Where Accident Happen" onChange={e => setTown(e.target.value)} />
          </Col>
          </Row>
          <Row>
            <Col>
              <input type="text" placeholder="Date Accident Happen" onChange={e => setDate(e.target.value)} />
            </Col>
            <Col>            
              <input type="text" placeholder="Speed of Your Car" onChange={e => setSpeed(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col>
            <input type="text" placeholder="Speed of Other Driver" onChange={e => setSpeedD(e.target.value)} />
            </Col>
            <Col>
              <input type="text" placeholder="555-555-5555" onChange={e => setPhoneNumber(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="text" placeholder="bill@gmail.com" onChange={e => setEmail(e.target.value)} />
            </Col>
            <Col>
              <input type="text" placeholder="Date Recovered" onChange={e => setRecoverDate(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="text" placeholder="Number of trips to rehab" onChange={e => setRehabTrips(e.target.value)} />
            </Col>
            <Col>
              <input type="text" placeholder="Time per a visit spent at rehab" onChange={e => setRehabTime(e.target.value)} />
            </Col>
          </Row>
          <hr></hr>
          <input type="text" placeholder="Hourly Income" onChange={e => setHourlyIncome(e.target.value)} />
          <hr></hr>
          <button >            
              Generate Demand Letter
          </button>
        </form>
      </div>
    </Container>
  );
}