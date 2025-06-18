import { sayHello } from 'api';
import React from 'react'
function App() {
  console.log(sayHello());

  return <div>{sayHello()}</div>;
}

export default App;