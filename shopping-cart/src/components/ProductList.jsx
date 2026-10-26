import ProductItem from './ProductItem';

function ProductList({ products, onAdd }) {
  return (
    <section aria-labelledby="products-title">
      <h2 id="products-title">Prekės</h2>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
