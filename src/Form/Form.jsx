function Form() {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exchangeValue"
          aria-describedby="exchangeValue"
        />
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="quote">
          <option selected>Z</option>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="base">
          <option selected>NA</option>
          <option value="PLN">PLN</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
