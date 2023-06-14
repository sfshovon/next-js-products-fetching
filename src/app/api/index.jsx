export const fetchProducts = async (page) => {
  const url = `https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=${page}&limit=30&type=Q_COMMERCE`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result?.products;
  } 
  catch (error) {
    console.error(error);
  }
};