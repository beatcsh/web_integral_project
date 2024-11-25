import { Container, Card, Row, Col, Form, Button } from "react-bootstrap"
import { useState } from "react";
import Swal from "sweetalert2";
import axios, {AxiosError} from "axios";

export const Login = () => {
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
            const response = await axios.post("http://localhost:4000/user/login",data);
            Swal.fire("Datos enviados con exito", response.data, "success");
        } catch (error:any) {
            Swal.fire("Hay un error al enviar",error.response.data.msg,"error")
        }
    }
    return (
        <>
            <Container className="justify-content-center align-items-center">
                <Card style={{ width: "30rem", margin: "auto" }} className="m-5">
                    <Card.Body>
                        <Card.Title className="mb-3 text-center">¡Bienvenido! Inicia Sesion</Card.Title>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Correo:</Form.Label>
                                    <Form.Control name="email" onChange={onChange} className="mb-3" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control name="password" onChange={onChange} type="password" className="mb-3" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3 text-center">
                            <Col className="d-grid">
                                <Button onClick={() => onSubmit()}>Ingresar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>¿Olvidaste tu contraseña? Recuperala <a>aqui</a></Col>
                            <Col>¿No tienes cuenta? Registrate <a>aqui</a></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}