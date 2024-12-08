import { Container } from "react-bootstrap";
import { ShowList } from "../components/ShowList";

export const ListUser = () => {
    return (
        <>
            <Container>
                <ShowList entity="user"/>
            </Container>
        </>
    )
}