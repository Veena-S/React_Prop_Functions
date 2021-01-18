import React, {useState} from 'react';

// This is an invalid hook call
// Hooks can only be called inside of the body of a function component
// const [temperature, setTemp] = useState(0);

function TempForm({ sendTemp }) {

  let [temperature, setTemp] = useState("");

  const handleChange = (event) => {
    temperature = event.target.value;

    console.log(temperature);

    // validate form only enter numbers
    if (temperature === "" || Number(temperature)) {
      setTemp(temperature);
      
      // set the teperature value in App component
      sendTemp(Number(temperature));
    }
  };

  return <input value={temperature} onChange={handleChange} />;
}

function Fahrenheit({ temperature }) {
  return (
    <p>
      {temperature} in fahrenheit is: {(temperature * 9) / 5 + 32}
    </p>
  );
}

export default function App() {
  // App (parent) level data and state function
  const [temperature, setTemp] = useState(0);
  return (
    <div>
      <TempForm sendTemp={(temp) => setTemp(temp)} />
      <Fahrenheit temperature={temperature} />
    </div>
  );
}