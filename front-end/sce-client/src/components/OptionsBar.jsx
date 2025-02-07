import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ImgLogo from "../images/logo.png";
import Image from "react-bootstrap/Image";
import ImgNotifications from "../images/notifications.png";
import ImgCloseSession from "../images/close-sesion.png";
import ImgConfig from "../images/config.png";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row";
function OptionsBar() {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Container style={{ minHeight: "150px" }}>
        <Col></Col>
        <Col>
          <Navbar.Brand onClick={()=> {navigate('/home')}}>
            <img alt="Logo del CEQIATEC" src={ImgLogo} />
          </Navbar.Brand>
        </Col>
        <Col>
          <Button
            variant="outline-ligth">
            <Image src={ImgConfig} />
          </Button>
          <Button
            variant="outline-ligth">
            <Image src={ImgNotifications} />
          </Button>
          <Button
            variant="outline-ligth">
            <Image src={ImgCloseSession} />
             Cerrar sesión</Button>
        </Col>
      </Container>
    </Navbar>
  );
}

export default OptionsBar;
