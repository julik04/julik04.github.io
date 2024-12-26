function CardProduct({ title, price, productSRC }) {
  return (
    <div className="card">
      <img src={productSRC} className="gallery__img" alt="1" />
      <div class="content">
        <h2 class="title">{title}</h2>
        <p class="price">{price}</p>
      </div>
    </div>
  );
}
export default CardProduct;
