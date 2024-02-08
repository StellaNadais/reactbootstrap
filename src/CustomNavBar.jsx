import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const navItems = [
  { href: "/", title: "Home" } ,
  { href: "/page1", title: "Page 1" } ,
  { href: "/page2", title: "Page 2" } ,
  { href: "/page3", title: "Page 3" } ,
];
function CustomNavBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map(
              item => <Nav.Link href={item.href}>{item.title}</Nav.Link>
            )

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
