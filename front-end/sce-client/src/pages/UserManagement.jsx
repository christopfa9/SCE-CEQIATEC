import React from "react";
import Aside from "../components/Aside";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import ImgCreate from "../images/create-user.png";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import OptionsBar from "../components/OptionsBar";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { getUserList } from "../calls/ApiCalls";


function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserList()
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
          console.log(error);
        })
  },[]);

  return (
    <Container fluid style={ {height: '1080px'}}>
      <Row style={ {height: '100%'}}>
        <Col xs={3}>
          <Aside btnUsersChecked={true} btnEquipmentsChecked={false}/>
        </Col>
        <Col>
          <OptionsBar />
          <Container>
          <Row>
            <Col></Col>
            <Col xs={1}>
            <Button
            variant="outline-ligth">
            <Image src={ImgCreate} />
            </Button>
            </Col>
          </Row>
          <Row>
            <Table hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre del Usuario</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(function (user, index) {
                            return(
                                <tr key={index}>
                                    <td> <Form.Check
                                        label={user.Id}/></td>
                                    <td>{user.Username}</td>
                                    <td>{user.Rol}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
          </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default UserManagement;
