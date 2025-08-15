const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 29999,
    inStock: true,
  };
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductInfo;
