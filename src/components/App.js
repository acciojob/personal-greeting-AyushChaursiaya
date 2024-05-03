
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("");

  const onChangeText = (e) => {
      setName(e.target.value);
  }
  
  return (
    <div>
        <P>Enter your name:</P>
        <input type={text} value={name} onChange={onChangeText} />
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
