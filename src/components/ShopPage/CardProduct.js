function CardProduct({ title, price, productSRC }) {
  return (
    <div className="card">
      <img src={productSRC} alt={title} />
      <div class="content">
        <h2 class="title">{title}</h2>
        <p class="price">{price}₽ </p>
      </div>
    </div>
  );
}
export default CardProduct;
