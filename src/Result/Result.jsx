import { useState } from "react";
import { useEffect } from "react";

function Result({ exchangeValue, quote, base }) {
  const [data, setData] = useState({});

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchRate() {
        try {
          const res = await fetch(
            `https://api.frankfurter.dev/v2/rates?quotes=${quote}&base=${base}`,
            { signal: controller.signal },
          );
          if (!res.ok) throw new Error("Błąd serwera: " + res.status);
          const json = await res.json();
          setData(json[0]);
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        }
      }

      fetchRate();

      return function () {
        controller.abort();
      };
    },
    [quote, base],
  );

  return (
    <h3>
      Do wypłaty: {exchangeValue * data.rate} po kursie {data.rate}
    </h3>
  );
}

export default Result;
