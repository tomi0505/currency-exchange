function Form({
  exchangeValue,
  handleChangeExchangeValue,
  quote,
  handleChangeQuote,
  base,
  handleChangeBase,
  currencies,
  dataIsLoading,
}) {
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
            disabled={dataIsLoading}
          />
        </div>
        <div className="col-12 mb-3 col-md-3">
          <select
            className="form-select"
            aria-label="quote"
            value={quote}
            onChange={handleChangeQuote}
            disabled={dataIsLoading}
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
            disabled={dataIsLoading}
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
