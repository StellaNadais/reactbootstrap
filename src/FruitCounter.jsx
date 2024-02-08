import { useState } from "react";
import Form from "react-bootstrap/Form";
function FruitCounter() {
  const [apples, setApples] = useState(0);
  const [guavas, setGuavas] = useState(0);
  const [mangos, setMangos] = useState(0);
  const allFruit = Number(apples) + Number(guavas) + Number(mangos);
  return (
    <div>
      <h1>Fruit Counter: {allFruit} </h1>
      <Form>
        <Form.Group className="mb-3" controlId="apples">
          <Form.Label>{apples} Apples</Form.Label>
          <Form.Control
            type="number"
            placeholder="2"
            onInput={(e) => setApples(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="guavas">
          <Form.Label> {guavas} Guava</Form.Label>
          <Form.Control
            type="number"
            placeholder="2"
            onInput={(e) => setGuavas(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="mangos">
          <Form.Label> {mangos} Mangos</Form.Label>
          <Form.Control
            type="number"
            placeholder="2"
            onInput={(e) => setMangos(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
export default FruitCounter;
