import { Container, Card, Row, Col, Form, Button } from "react-bootstrap"

export const Login = () => {
    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>¡Bienvenido! Inicia Sesion</Card.Title>
                        <Row>
                            <Col>
                                <Form.Control/>
                                <Form.Control/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button>Ingresar</Button>
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