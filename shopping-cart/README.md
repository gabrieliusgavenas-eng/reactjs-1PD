# Shopping cart

Part B of the React practice assignment. Built with Vite, React and JavaScript.

## Run

From this folder:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the Local address printed by Vite.

## Checks

```powershell
npm.cmd run lint
npm.cmd run build
```

## Components

- App keeps the products and cart in useState and handles addition and removal.
- ProductList passes each product and onAdd to ProductItem.
- ProductItem displays a product and calls onAdd when its button is clicked.
- Cart receives cart and onRemove, displays quantities and calculates totals.
- formatPrice formats amounts with two decimal places, a comma and Eur.

State updates create new arrays and objects. Repeated additions increase quantity
without creating a second row. Removal deletes the complete row. Totals are
calculated in cents and are not stored as separate state. Reloading the page
resets the cart. No useEffect or additional runtime libraries are used.

## Manual verification

1. Reload: three products, an empty cart and 0,00 Eur.
2. Add the notebook twice: one row, quantity 2, unit price 4,50 Eur,
   row total and grand total 9,00 Eur.
3. Add the pen: a second row with quantity 1 and grand total 10,20 Eur.
4. Add the backpack: a third row and grand total 40,19 Eur.
5. Remove the notebook: its entire row disappears, the other rows remain,
   and the grand total is 31,19 Eur.
6. Remove all remaining products: empty message and 0,00 Eur.
7. Add the notebook again: its quantity starts at 1.
8. Use Tab and Enter to add a product using the keyboard.
9. Narrow the browser window: cards stack and buttons remain usable.

Lint and production build passed during implementation. Interactive browser
verification could not be completed because the browser-control tool could not
reliably determine the current Windows browser URL.
