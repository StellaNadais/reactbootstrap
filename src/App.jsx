import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CustomNavBar from "./CustomNavBar";
import FruitCounter from "./FruitCounter";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomNavBar />
      <Container>
        <FruitCounter />
      </Container>

      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
