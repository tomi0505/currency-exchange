import { useState } from "react";
import { useEffect } from "react";

function Result({
  exchangeValue,
  quoteValue,
  baseValue,
  dataIsLoading,
  setDataIsLoading,
}) {
  const [data, setData] = useState(null);

  const { rate, quote, base } = data ?? {};

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchRate() {
        setDataIsLoading(true);

        try {
          const res = await fetch(
            `https://api.frankfurter.dev/v2/rates?quotes=${quoteValue}&base=${baseValue}`,
            { signal: controller.signal },
          );
          if (!res.ok) throw new Error("Błąd serwera: " + res.status);
          const json = await res.json();
          setData(json[0]);
          setDataIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        }
      }

      fetchRate();

      return function () {
        controller.abort();
      };
    },
    [quoteValue, baseValue],
  );

  return data && exchangeValue > 0 ? (
    !dataIsLoading ? (
      <h3>
        Do wypłaty: {(exchangeValue * rate).toFixed(2)} {quote} po kursie{" "}
        {rate.toFixed(2)} {base}
      </h3>
    ) : (
      <p>Odświeżam dane...</p>
    )
  ) : (
    <p>Wpisz w powyższym formularzu jakąś kwotę.</p>
  );
}

export default Result;
