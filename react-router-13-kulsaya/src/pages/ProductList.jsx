import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul class="ul-ProductList">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
