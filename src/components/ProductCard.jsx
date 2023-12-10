// const ProductCard = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ProductCard

const ProductCard = ({ product }) => {
  const { images, title, price, rating, discountPercentage } = product;

  return (
    <div className="product-card">
      <img src={images[0]} alt="product image" className="product-image" />
      <div className="product-rate">
        <strong>{title}</strong>
        <p>
          <i class="fas fa-star" style={{ paddingRight: "10px" }}></i>
          {rating}
        </p>
      </div>
      <div className="price">
        <p style={{ color: "darkorange" }}>
          ${(price - price / discountPercentage).toFixed(2)}
        </p>
        <p style={{ color: "gray", textDecoration: "line-through" }}>
          ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
