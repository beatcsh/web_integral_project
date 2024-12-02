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

    function getKeys<T>() {
        return Object.keys({}) as (keyof T)[]
    }

    const getData = async () => {
        try {
            const url = `http://localhost:4000/${entity}/list`;
            const { data } = await axios.get(url);
            setData(data);
        } catch (err: any) {
            Swal.fire("No jalo","no sirve esto","error")
        }
    }

    const getColumns = () => {
        let columns:any = [];

        if (entity === "event") {
            columns = getKeys<IEvent>();
        } else if (entity === "team") {
            columns = getKeys<ITeams>();
        } else if (entity === "user") {
            columns = getKeys<IUser>();
        }

        const HTMLColumns = columns.map((c:any) => {
            <th>{c}</th>
        })

        return HTMLColumns;
    }

    return(
        <Card>
            <Card.Body>
                <Card.Title>Listado de {entity}</Card.Title>
                <Table>
                    <thead>
                        {getColumns()}
                    </thead>
                    <tbody>
                        {
                            data.map((datum) => (
                                <tr>
                                    <td>{datum}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}