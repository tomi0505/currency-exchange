import { useEffect, useState } from "react";

function Form({
  exchangeValue,
  handleChangeExchangeValue,
  quote,
  handleChangeQuote,
  base,
  handleChangeBase,
}) {
  const [currencies, setCurrencies] = useState([]);

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

  return (
    <form className="container px-0">
      <div className="row">
        <div className="col-12 mb-3 col-md-6">
          <input
            type="number"
            className="form-control"
            id="exchangeValue"
            aria-describedby="exchangeValue"
            placeholder="Kwota"
            value={exchangeValue}
            onChange={handleChangeExchangeValue}
          />
        </div>
        <div className="col-12 mb-3 col-md-3">
          <select
            className="form-select"
            aria-label="quote"
            value={quote}
            onChange={handleChangeQuote}
          >
            {currencies.map((currency) => {
              return (
                <option value={currency.quote} key={currency.quote}>
                  {currency.quote}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-12 mb-3 col-md-3">
          <select
            className="form-select"
            aria-label="base"
            value={base}
            onChange={handleChangeBase}
          >
            {currencies.map((currency) => {
              return (
                <option value={currency.quote} key={currency.quote}>
                  {currency.quote}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
