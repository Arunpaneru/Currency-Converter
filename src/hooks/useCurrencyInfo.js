import { useEffect, useState } from "react";
import axios from "axios";


function useCurrencyInfo(currency) {
  const [currencyData, setCurrencyData] = useState({});
  // console.log("currency provided is:", currency);
  useEffect(() => {
    console.log("currency provided is:", currency);
    const fetchData = async () => {
      try {
        const currency_url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
        const response = await axios.get(currency_url);
        console.log("response is :", response);
        const resdata = response.data;
        setCurrencyData(resdata[currency]);
      } catch (error) {
        console.log("error occured :", error);
      }
    };
    fetchData();
  }, [currency]);

  // console.log("currency data is:", currencyData);
  return currencyData;
}
export default useCurrencyInfo;
