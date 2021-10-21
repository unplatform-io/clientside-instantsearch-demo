import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const test = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await test.json();

  // .then(json=>))

  res.status(200).json(data);
};
