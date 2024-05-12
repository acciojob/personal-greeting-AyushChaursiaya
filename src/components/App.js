
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");

  const onChangeText = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <p>Enter your name:</p>
      <div>
        <input type="text" value={name} onChange={onChangeText} />
        {name && <p>Hello {name}!</p>}
      </div>
    </div>
  )
}

export default App;
