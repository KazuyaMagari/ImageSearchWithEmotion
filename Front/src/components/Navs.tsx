import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function Navs() {
  return (
    <Navbar expand="lg" className="bg-dark" style={{ height: "7vh" }}>
      <Container fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="感情を入力してください"
            className="px-0 mx-0"
            aria-label="Search"
            style={{ color: "white", width: "80vw" }}
          />
          <Button variant="outline-success" className="me-3 ms-3">
            Search
          </Button>
          <Button>Login</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navs;
