import React from "react";
import {useState} from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ImgUser from "../images/user-icon.png";
import Image from "react-bootstrap/Image";
import ImgInfo from "../images/inf-icon.png";
import ImgPerson from "../images/person-icon.png";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from 'react-router-dom';

function Aside( {btnUsersChecked, btnEquipmentsChecked}) {
  const navigate = useNavigate();
  return (
    <Container
      style={{ backgroundColor: "#2EB394", height: "100%", padding: "13%" }}
    >
      <Row>
        <Col xs={3}>
          <Image src={ImgUser} alt="Icono de usuario" />
        </Col>
        <Col>
        <Stack gap={0}>
          <h5>ID: JLV-323</h5>
          <h4><strong>Javier Leiva Valverde</strong></h4>
          <h5>Administrador</h5>
          </Stack>
        </Col>
      </Row>
      <Stack gap={4} style={{marginTop: '97%'}}>
        <Button size="lg"
          active={btnEquipmentsChecked}
          onClick={()=> {
            navigate('/equipments')
          }}>
            <Row>
              <Col xs={1}>
          <Image src={ImgInfo} />
              </Col>
<Col>
          Equipos
</Col>
            </Row>
        </Button>
        <Button size="lg"
        active={btnUsersChecked}
        onClick={() => { 
          navigate('/users')}}>
            <Row>
              <Col xs={1}>
          <Image src={ImgPerson} />
              </Col>
              <Col>
          Gestion de Usuarios
              </Col>

            </Row>
        </Button>
      </Stack>
    </Container>
  );
}
export default Aside;
