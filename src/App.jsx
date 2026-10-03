import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./Result/Result";

function App() {
  const [exchangeValue, setExchangeValue] = useState("");
  const [quote, setQuote] = useState("PLN");
  const [base, setBase] = useState("EUR");
  const [currencies, setCurrencies] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  useEffect(function () {
    const controller = new AbortController();

    async function fetchCurrencies() {
      try {
        const res = await fetch("https://api.frankfurter.dev/v2/rates", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Błąd serwera: " + res.status);
        const json = await res.json();
        setCurrencies(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      }
    }

    fetchCurrencies();

    return function () {
      controller.abort();
    };
  }, []);

  function handleChangeExchangeValue(e) {
    setExchangeValue(e.target.value);
  }

  function handleChangeQuote(e) {
    setQuote(e.target.value);
  }

  function handleChangeBase(e) {
    setBase(e.target.value);
  }

  return currencies.length > 0 ? (
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
            currencies={currencies}
            dataIsLoading={dataIsLoading}
          />
          <Result
            exchangeValue={exchangeValue}
            quoteValue={quote}
            baseValue={base}
            dataIsLoading={dataIsLoading}
            setDataIsLoading={setDataIsLoading}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <p>Trwa ładowanie aplikacji...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
