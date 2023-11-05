import "./countBox.css";
import { useState } from "react";
// import App from "./App";

export const CountBox = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    console.log(Number(event.target.value));
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <h1>Count</h1>
      <input
        placeholder={value}
        type="number"
        value={value}
        onChange={handleChange}
        className="counter"
        key={"Counter-1"}
      ></input>
      <button
        className="pluss"
        type="number"
        key={"Counter-2"}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
      <button
        className="minus"
        type="number"
        key={"Counter-3"}
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default CountBox;
// function sayHello(name) {
//   console.log(`Hello, ${name}!`);
//   return "this is the point";
// }

// function CountBox() {
//   // const [number, setNumber] = useState(0);
//   const onClick = sayHello("Stian");
//   console.log(`onClick: "${onClick}"`);

//   return (
//     <div>
//       <Button className="pluss" onClick={onClick}>
//         +
//       </Button>
//       {/* {number} <button onClick={setNumber(number + 1)}>+</button>
//       {number} <button onClick={addNumber}>+</button> */}
//     </div>
//   );
// }
// // addNumber();

// function Button(props) {
//   console.log(`I am Button, here are my attributes:`, props);

//   return <button {...props} />;
// }
