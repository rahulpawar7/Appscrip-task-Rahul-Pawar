// utils/api.ts
export const fetchProducts = async (limit: number = 10) => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}`
  );
  return response.json();
};
