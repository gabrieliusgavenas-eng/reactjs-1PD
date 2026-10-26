import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [products] = useState([
    { id: 1, name: 'Užrašų knygelė', price: 4.5 },
    { id: 2, name: 'Rašiklis', price: 1.2 },
    { id: 3, name: 'Kuprinė', price: 29.99 },
  ]);
  const [cart, setCart] = useState([]);

  function handleAddProduct(product) {
    setCart((previousCart) => {
      const existingProduct = previousCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveProduct(id) {
    setCart((previousCart) => previousCart.filter((item) => item.id !== id));
  }

  return (
    <main>
      <h1>Krepšelio sistema</h1>
      <ProductList products={products} onAdd={handleAddProduct} />
      <Cart cart={cart} onRemove={handleRemoveProduct} />
    </main>
  );
}

export default App;
