import axios from "axios";
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { IEvent, ITeams, IUser } from "../Types";
import { Card, Table } from "react-bootstrap";

interface props {
    entity: "user" | "team" | "event"
}

export const ShowList = ({ entity }: props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    // function getKeys<T>() {
    //     return Object.keys({}) as (keyof T)[]
    // }

    const getData = async () => {
        try {
            const url = `http://localhost:4000/${entity}/list`;
            const { data } = await axios.get(url);
            setData(data);
        } catch (err: any) {
            Swal.fire("No jalo", "no sirve esto", "error")
        }
    }

    const getColumns = () => {
        const user_columns = ["Nombre", "Correo", "Curp", "Rol"];
        const event_columns = ["Titulo", "Maximo de rondas"];
        const teams_columns = ["Nombre", "Lider"];

        let columns: any = [];

        if (entity === "event") {
            columns = event_columns;
        } else if (entity === "team") {
            columns = teams_columns;
        } else if (entity === "user") {
            columns = user_columns;
        }

        const HTMLColumns = columns.map((c: any) => {
            <th>{c}</th>
        })

        return HTMLColumns;
    }

    const getName = () => {
        let name = "";
        if (entity === "event") {
            name = "Eventos";
        } else if (entity === "team") {
            name = "Equipos";
        } else if (entity === "user") {
            name = "Usuarios";
        }
        return name;
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Listado de {entity}</Card.Title>
                <Table>
                    <thead>
                        {getColumns()}
                    </thead>
                    <tbody>
                        {
                            entity == "event" && (
                                data.map((event:IEvent) => (
                                    <tr>
                                        <td>{event.name}</td>
                                        <td>{event.max_round}</td>
                                    </tr>
                                ))
                            ) ||
                            entity == "team" && (
                                data.map((team:ITeams) => (
                                    <tr>
                                        <td>{team.name}</td>
                                        <td>{team.id_leader}</td>
                                    </tr>
                                ))
                            )  ||
                            entity == "user" && (
                                data.map((user:IUser) => (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.curp}</td>
                                        <td>{user.role}</td>
                                    </tr>
                                ))
                            )                            
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}