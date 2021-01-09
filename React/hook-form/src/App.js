import React from 'react';
import './App.css';
import UserForm from "./components/UserForm";

function App() {

  // const [state, setState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // });

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
