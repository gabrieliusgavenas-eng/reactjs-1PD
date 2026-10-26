import { formatPrice } from '../utils/formatPrice';

function Cart({ cart, onRemove }) {
  // Calculate in cents to avoid accumulating floating-point rounding errors.
  const totalCents = cart.reduce(
    (sum, item) => sum + Math.round(item.price * 100) * item.quantity,
    0
  );

  return (
    <section className="cart" aria-labelledby="cart-title">
      <h2 id="cart-title">Krepšelis</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Krepšelis tuščias.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <h3>{item.name}</h3>
              <dl>
                <div>
                  <dt>Vieneto kaina</dt>
                  <dd>{formatPrice(item.price)}</dd>
                </div>
                <div>
                  <dt>Kiekis</dt>
                  <dd>{item.quantity}</dd>
                </div>
                <div>
                  <dt>Eilutės suma</dt>
                  <dd>
                    {formatPrice(Math.round(item.price * 100) * item.quantity / 100)}
                  </dd>
                </div>
              </dl>
              <button
                className="remove-button"
                type="button"
                onClick={() => onRemove(item.id)}
              >
                Pašalinti iš krepšelio
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="cart-total" aria-live="polite">
        Bendra kaina: <strong>{formatPrice(totalCents / 100)}</strong>
      </p>
    </section>
  );
}

export default Cart;
