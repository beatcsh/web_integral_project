import { Container, Form, Card, Button, Row, Col } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const RegisterParticipant = () => {
    const [data, setData] = useState({});

    const onChange = (e: any) => {
        e.preventDefault();
        const tempData: any = data;
        tempData[e.target.name] = e.target.value;
    };

    const onSubmit = async () => {
        try {
            Swal.fire("Enviando datos");
            Swal.showLoading();
            await axios.post("http://localhost:4000/user/register");
            Swal.fire("Datos guardados con exito", "", "success");
        } catch (error: any) {
            Swal.fire("Hay un error al guardar", error.response.data.msg, "error")
        }
    }
    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Registrate mi rey</Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={onChange} name="name"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <Form.Control onChange={onChange} name="email"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CURP:</Form.Label>
                                <Form.Control onChange={onChange} name="curp"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control onChange={onChange} name="password"></Form.Control>
                            </Form.Group>
                            <Row className="mb-3 text-center">
                                <Col className="d-grid">
                                    <Button onClick={() => onSubmit()}>Ingresar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}