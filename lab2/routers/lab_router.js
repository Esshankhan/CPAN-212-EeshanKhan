//
import express from "express";

const router = express.router();

//checking if in route
router.get("/", (req, res) => {
  res.send("Welcome to the lab router");
});
//name route
router.get("/name", (req, res) => {
  res.send("Eeshan khan");
});
//grettings
router.get("/greeting", (req, res) => {
  res.send("Hello from Eeshan");
});
//add
router.get("/add/:x/:y", (req, res) => {
  let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);
  res.send(`${x + y}`);
});
//calculate
router.get("/calculate/:a/:b/:operation", (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  let operation = req.params.operation;
  let result = 0;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
      case "*":
      result = a * b;
      break;
      case "/"://->%2f
      result = a / b;
      break;

    default:
      res.send("Invalid operation");
      break;
  }
  res.send(`${result}`)
});

export default router;
