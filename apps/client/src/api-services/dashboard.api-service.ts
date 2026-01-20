import { API_KEY, BASE_URL } from "./api.constants";

export const getTestCall = async (): Promise<any[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return [
    {
      id: "1",
      symbol: "AAPL",
      quantity: 10,
      averagePrice: 150,
      currentPrice: 185.5,
      unrealizedPL: 355,
      unrealizedPLPercentage: 23.6,
    },
    {
      id: "2",
      symbol: "TSLA",
      quantity: 5,
      averagePrice: 200,
      currentPrice: 175.2,
      unrealizedPL: -124,
      unrealizedPLPercentage: -12.4,
    },
  ];
};

export const getCrudeOilData = async (): Promise<any> => {
  if (!API_KEY) {
    console.error("Missing API key for Alpha Advantage API!");
  }

  const url = `${BASE_URL}?function=BRENT&interval=monthly&apikey=${API_KEY}`;
  const data = await fetch(url);
  return data.json();
};
