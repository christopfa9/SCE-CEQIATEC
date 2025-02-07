import React from "react";
import Aside from "../components/Aside";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ImgEquipmentMagement from "../images/gestion-equipos.png";
import ImgUserManagement from "../images/gestion-usuarios.png";
import MainOption from "../components/MainOption";
import OptionsBar from "../components/OptionsBar";
import Row from "react-bootstrap/Row";
function Home() {
    return (
        <Container fluid style={ {height: '1080px'}}>
            <Row style={{height: '100%'}}>
                <Col xs={3}>
                    <Aside />
                </Col>
                <Col>
                    <OptionsBar />
                    <Row style={{marginTop: '10%'}}>
                        <Col>
                            <MainOption
                                title="Gestión de Equipos"
                                image={ImgEquipmentMagement}
                                description="Opción de gestión de equipos"
                                page="equipments"/>
                        </Col>
                        <Col>
                            <MainOption
                                title="Gestión de Usuarios"
                                image={ImgUserManagement}
                                description="Opción de gestión de usuarios"
                                page="users"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;
