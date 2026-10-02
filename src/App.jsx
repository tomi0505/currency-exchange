import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <h1 className="mb-3">Kantor walut</h1>
            <Form />
            <h3>100</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
