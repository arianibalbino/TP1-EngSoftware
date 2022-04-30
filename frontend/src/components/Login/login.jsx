import React from "react";
import Userfront from "@userfront/react";

Userfront.init("demo1234");

const LoginForm = Userfront.build({
  toolId: "alnkkd"
});

function App() {
  return (
    <div className="col col-login">
      <LoginForm />;
    </div>
  ) 
}

export default App;
