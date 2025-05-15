import { Col, Row } from "reactstrap";
import { ListProject } from "../components/ListProject";
import { ListTask } from "../components/ListTask";

export function ListProjectPage() {
  return (
    <div>
      <Row>
        <Col style={{ padding: '50px' }}>
          <h1 style={{ textAlign: 'center' }}>List Projects</h1>
          <ListProject />
        </Col>
        <Col style={{ padding: '50px' }}>
          <h1 style={{ textAlign: 'center' }}>List Tasks</h1>
          <ListTask />
        </Col>
      </Row>
    </div>
  );
}