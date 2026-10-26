import { formatPrice } from '../utils/formatPrice';

function ProductItem({ product, onAdd }) {
  return (
    <li className="product-card">
      <h3>{product.name}</h3>
      <p className="product-price">{formatPrice(product.price)}</p>
      <button type="button" onClick={() => onAdd(product)}>
        Pridėti į krepšelį
      </button>
    </li>
  );
}

export default ProductItem;
