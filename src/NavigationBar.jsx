import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar() {
  return (
    <Navbar>
        <Container style={{
            backgroundColor: "#343a40",
            height:"60px", 
            paddingTop: "5px",
            paddingRight: "20px",
            paddingBottom: "5px",
            paddingLeft: "20px",
            flexDirection: "row",
            display:"flex",
            alignItems:"flex-start",
            justifyContent: 'space-between' }}>
          <Navbar.Brand style={{display:"flex", FlexDirection:"row",}}>
            <img className="logo-img" src="algo.png" alt="Pathfinder"/>
            <text style={{
                fontFamily: "roboto", 
                fontWeight: "10px",fontSize:"25px", 
                color: "#FFFFFF", alignItems: "center", paddingTop: "20px"}}> Pathfinder 
            </text>
          </Navbar.Brand>
          <text style={{fontFamily: "roboto", color: "#FFFFFF",
                fontWeight: "10px",fontSize:"25px",paddingTop: "10px",paddingLeft: "100px"}}>
            by <a href="https://www.linkedin.com/in/john-duan/">Han Duan</a>
          </text>

        </Container>
      </Navbar>
  );
}

export default NavigationBar;