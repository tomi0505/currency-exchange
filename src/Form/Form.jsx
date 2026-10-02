function Form() {
  return (
    <form className="container px-0">
      <div className="row">
        <div className="col-12 mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            id="exchangeValue"
            aria-describedby="exchangeValue"
            placeholder="Kwota"
          />
        </div>
        <div className="col-12 mb-3 col-md-3">
          <select className="form-select" aria-label="quote">
            <option value="PLN" selected>
              PLN
            </option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="col-12 mb-3 col-md-3">
          <select className="form-select" aria-label="base">
            <option value="EUR" selected>
              EUR
            </option>
            <option value="USD">USD</option>
            <option value="PLN">PLN</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default Form;
