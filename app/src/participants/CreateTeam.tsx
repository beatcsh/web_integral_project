import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { ITeams } from "../Types";
import Swal from "sweetalert2";
import axios from "axios";

export const CreateTeam = () => {
    const [data, setData] = useState<ITeams>({
        name: "",
        id_members: [],
        id_leader: "",
        round: 0,
        id_scores: []
    });

    const [members, setMembers] = useState<string[]>([""]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        console.log(data)
    };

    const settearMiembros = (index: number, value: string) => {
        const updatedMembers = [...members];
        updatedMembers[index] = value;
        setMembers(updatedMembers);
        setData({
            ...data,
            id_members: updatedMembers.filter(member => member !== "")
        });
        console.log(data)
    };

    const addInputs = () => {
        setMembers([...members, ""]);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/team/create', data);
            Swal.fire("¡Equipo creado!", "El equipo se ha creado exitosamente.", "success");
        } catch (error) {
            Swal.fire("Error", "Hubo un problema al crear el equipo.", "error");
        }
    };

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center vh-100">
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center mb-3">Crear un Equipo</Card.Title>
                        <Form onSubmit={onSubmit}>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            name="name"
                                            value={data.name}
                                            onChange={onChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Líder</Form.Label>
                                        <Form.Control
                                            name="id_leader"
                                            value={data.id_leader}
                                            onChange={onChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Miembros</Form.Label>
                                    {members.map((member, index) => (
                                        <Form.Group className="mb-2" key={index}>
                                            <Form.Control
                                                value={member}
                                                onChange={(e) => settearMiembros(index, e.target.value)}
                                            />
                                        </Form.Group>
                                    ))}
                                    <Button variant="primary" onClick={addInputs}>
                                        Añadir Miembro
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="mb-3 mt-3 text-center">
                                <Col className="d-grid">
                                    <Button type="submit" className="btn btn-success">
                                        Ingresar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};
