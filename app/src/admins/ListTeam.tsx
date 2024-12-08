import { Container } from "react-bootstrap";
import { ShowList } from "../components/ShowList";

export const ListTeam = () => {
    return (
        <>
            <Container>
                <ShowList entity="team"/>
            </Container>
        </>
    )
}