import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./Result/Result";

function App() {
  const [exchangeValue, setExchangeValue] = useState("");
  const [quote, setQuote] = useState("PLN");
  const [base, setBase] = useState("EUR");

  function handleChangeExchangeValue(e) {
    setExchangeValue(e.target.value);
  }

  function handleChangeQuote(e) {
    setQuote(e.target.value);
  }

  function handleChangeBase(e) {
    setBase(e.target.value);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <h1 className="mb-3">Kantor walut</h1>
            <Form
              exchangeValue={exchangeValue}
              handleChangeExchangeValue={handleChangeExchangeValue}
              quote={quote}
              handleChangeQuote={handleChangeQuote}
              base={base}
              handleChangeBase={handleChangeBase}
            />
            <Result exchangeValue={exchangeValue} quote={quote} base={base} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
