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
