import { useState } from "react";
import Form from "react-bootstrap/Form";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CustomNavBar from "./CustomNavBar";
import FruitCounter from "./FruitCounter";
import { Button, Container } from "react-bootstrap";

const defaultNavItems = [
  { href: "/", title: "Home" },
  { href: "/page1", title: "Page 1!" },
  { href: "/page2", title: "Page 2!" },
  { href: "/page3", title: "Page 3" },
];

function App() {
  const [count, setCount] = useState(0);

  const [navItems, setNavItems] = useState(defaultNavItems);

  const handleSubmit = (event) => {
    event.preventDefault();
    const submission = Object.fromEntries(new FormData(event.target));
    const newNavItems = [
      ...navItems,
      ...[{ href: submission.href, title: submission.title }],
    ];
    setNavItems(newNavItems);
    console.log(submission);
  };
  return (
    <>
      <CustomNavBar navItems={navItems} />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="href">
            <Form.Label>href</Form.Label>
            <Form.Control name="href" type="text" required={true} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>title</Form.Label>
            <Form.Control name="title" type="text" required={true} />
          </Form.Group>
          <Button type="submit">add new item</Button>
        </Form>
        <FruitCounter />
      </Container>

      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
