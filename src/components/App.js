
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");

  const onChangeText = (e) => {
      setName(e.target.value);
  }
  
  return (
    <>
        {/* <p>Enter your name:</p> */}
        <input type="text" value={name} onChange={onChangeText} />
        {name && <p>Hello {name}!</p>}
    </>
  )
}

export default App;
