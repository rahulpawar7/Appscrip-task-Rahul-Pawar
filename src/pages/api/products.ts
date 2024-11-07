import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get the limit from the query parameters
    const limit = req.query.limit || 10;
    // Fetch data from Fake Store API with the limit
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
}
