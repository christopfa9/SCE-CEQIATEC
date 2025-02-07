import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import {
    getTypes,
    getLocations,
    getBrands,
    getUserList,
    createEquipment,
    getEquipment,
} from "../calls/ApiCalls";
import { useNavigate, useParams } from "react-router-dom";

function EquipmentDetails() {
    const { id } = useParams();
    const [equipment, setEquipment] = useState({});
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);
    const [locations, setLocations] = useState([]);
    const [brands, setBrands] = useState([]);
    const [users, setUsers] = useState([]);
    const [assetNumber, setAssetNumber] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const [description, setDescription] = useState("");
    const [correctionFactor, setCorrectionFactor] = useState("");
    const [nextCalibrationDate, setNextCalibrationDate] = useState("");
    const [workRange, setWorkRange] = useState("");
    const [minCapacity, setMinCapacity] = useState(0);
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [calibrationPoints, setCalibrationPoints] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [acceptanceRequirement, setAcceptanceRequirement] = useState("");
    const [model, setModel] = useState("");
    const [typeId, setTypeId] = useState(0);
    const [locationId, setLocationId] = useState(0);
    const [brandId, setBrandId] = useState(0);
    const [userId, setUserId] = useState(0);
    useEffect(() => {
        getEquipment(id)
            .then((res) => {
                console.log(res.data);
                setEquipment(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container fluid>
            <Container
                fluid
                style={{
                    backgroundColor: "#2EB394",
                    paddingLeft: "7.5%",
                    paddingRight: "7.5%",
                }}
            >
                <h1 className="text-center pt-5">EQ-{id}</h1>
                <Form>
                    <Container fluid className="border-bottom py-3">
                        <h3>Información General</h3>
                        <Row className="my-4">
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Tipo
                                    </Form.Label>
                                    <Col>
                                        <Form.Select
                                            size="lg"
                                            defaultValue="Elegir..."
                                            disabled
                                            onChange={(event) => {
                                                setTypeId(event.target.value);
                                            }}
                                        >
                                            <option value="">{equipment.Type}</option>
                                            {types.map(function (type) {
                                                return <option value={type.Id}>{type.Name}</option>;
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Responsable
                                    </Form.Label>
                                    <Col>
                                        <Form.Select
                                            size="lg"
                                            defaultValue=""
                                            disabled
                                            onChange={(event) => {
                                                setUserId(event.target.value);
                                            }}
                                        >
                                            <option value="">{equipment.Username}</option>
                                            {users.map(function (user) {
                                                return <option value={user.Id}>{user.Username}</option>;
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Ingreso
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="date"
                                            value={equipment.EntryDate}
                                            disabled
                                            onChange={(event) => {
                                                setEntryDate(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Ubiciación
                                    </Form.Label>
                                    <Col>
                                        <Form.Select
                                            size="lg"
                                            defaultValue="Elegir..."
                                            disabled
                                            onChange={(event) => {
                                                setLocationId(event.target.value);
                                            }}
                                        >
                                            <option value="">{equipment.Location}</option>
                                            {locations.map(function (location) {
                                                return (
                                                    <option value={location.Id}>{location.Name}</option>
                                                );
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        N° Activo
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            disabled
                                            value={equipment.AssetNumber}
                                            onChange={(event) => {
                                                setAssetNumber(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Col></Col>
                        </Row>
                    </Container>

                    <Container fluid className="border-bottom py-3">
                        <h2>Información de Fábrica</h2>
                        <Row>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Marca
                                    </Form.Label>
                                    <Col>
                                        <Form.Select
                                            size="lg"
                                            defaultValue="Elegir..."
                                            disabled
                                            onChange={(event) => {
                                                setBrandId(event.target.value);
                                            }}
                                        >
                                            <option value="">{equipment.BrandName}</option>
                                            {brands.map(function (brand) {
                                                return <option value={brand.Id}>{brand.Name}</option>;
                                            })}
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Modelo
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            disabled
                                            value={equipment.Model}
                                            onChange={(event) => {
                                                setModel(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        N° Serie
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            value={equipment.SerialNumber}
                                            disabled
                                            onChange={(event) => {
                                                setSerialNumber(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                    </Container>

                    <Container fluid className="py-3">
                        <h3>Información General</h3>
                        <Row className="my-4">
                            <Col xs={4}>
                                <Form.Group>
                                    <Row>
                                        <Form.Label column="lg" xs={3}>
                                            Descripción
                                        </Form.Label>
                                        <Col>
                                            <Form.Control
                                                size="lg"
                                                as="textarea"
                                                value={equipment.Description}
                                                disabled
                                                onChange={(event) => {
                                                    setDescription(event.target.value);
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Row>
                                    <Form.Group as={Col}>
                                        <Row>
                                            <Form.Label column="lg" xs={3}>
                                                Rango de trabajo
                                            </Form.Label>
                                            <Col>
                                                <Form.Control
                                                    size="lg"
                                                    type="text"
                                                    value={equipment.WorkRange}
                                                    disabled
                                                    onChange={(event) => {
                                                        setWorkRange(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Row>
                                            <Form.Label column="lg" xs={3}>
                                                Puntos de calibración
                                            </Form.Label>
                                            <Col>
                                                <Form.Control
                                                    size="lg"
                                                    type="text"
                                                    value={equipment.CalibrationPoints}
                                                    disabled
                                                    onChange={(event) => {
                                                        setCalibrationPoints(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Row>
                                <Row className="mt-4">
                                    <Col>
                                        <Row>
                                            <Col xs={3}>
                                                <p>Capacidad</p>
                                            </Col>
                                            <Form.Group as={Col}>
                                                <Row>
                                                    <Col>
                                                        <Form.Control
                                                            size="lg"
                                                            type="number"
                                                            value={equipment.MaxCapacity}
                                                            disabled
                                                            onChange={(event) => {
                                                                setMaxCapacity(event.target.value);
                                                            }}
                                                        />
                                                    </Col>
                                                    <Form.Label column="lg" xs={3}>
                                                        max
                                                    </Form.Label>
                                                </Row>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Row>
                                                    <Col>
                                                        <Form.Control
                                                            size="lg"
                                                            type="number"
                                                            value={equipment.MinCapacitiy}
                                                            disabled
                                                            onChange={(event) => {
                                                                setMinCapacity(event.target.value);
                                                            }}
                                                        />
                                                    </Col>
                                                    <Form.Label column="lg" xs={3}>
                                                        min
                                                    </Form.Label>
                                                </Row>
                                            </Form.Group>
                                        </Row>
                                    </Col>
                                    <Form.Group as={Col}>
                                        <Row>
                                            <Form.Label column="lg" xs={3}>
                                                Criterio de aceptación
                                            </Form.Label>
                                            <Col>
                                                <Form.Control
                                                    size="lg"
                                                    type="text"
                                                    value={equipment.AcceptanceRequirement}
                                                    disabled
                                                    onChange={(event) => {
                                                        setAcceptanceRequirement(event.target.value);
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Factor de corrección
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            value={equipment.CorrectionFactor}
                                            disabled
                                            onChange={(event) => {
                                                setCorrectionFactor(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Row>
                                    <Form.Label column="lg" xs={3}>
                                        Próxima calibración
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            size="lg"
                                            type="date"
                                            value={equipment.NextCalibrationDate}
                                            disabled
                                            onChange={(event) => {
                                                setNextCalibrationDate(event.target.value);
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Col></Col>
                        </Row>
                    </Container>
                    <Row></Row>
                </Form>
            </Container>
            <Container className="py-5 justify-content-center d-flex">
                <Button
                    style={{marginRight: '20%'}}
                    size="lg"
                    variant="secondary"
                    onClick={() => {
                        navigate("/equipments");
                    }}
                >
                    Cancelar
                </Button>
                <Button size="lg" variant="success"
                    style={{marginLeft: '20%'}}
                >
                    Editar
                </Button>
            </Container>
        </Container>
    );
}

export default EquipmentDetails;
