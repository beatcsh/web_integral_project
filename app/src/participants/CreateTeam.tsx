import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";

export const CreateTeam = () => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center mb-3">Crear un Equipo</Card.Title>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            name="name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Lider</Form.Label>
                                        <Form.Control
                                            name="name"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3 mt-3 text-center">
                                <Col className="d-grid">
                                    <Button className="btn btn-success">
                                        Ingresar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}