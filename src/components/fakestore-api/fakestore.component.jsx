import { useEffect, useState } from "react";
import "./fakestore.component.css";

export function FakeStoreComponent() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([{}]);

  function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(categories);
        data.unshift("all");
        setCategories(data);
      });
  }

  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }

  function HandleCategoryChange(event) {
    // console.log(event.target.value);
    if (event.target.value == "all") {
      LoadProducts("https://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `https://fakestoreapi.com/products/categories/${event.target.value}`
      );
    }
  }
  useEffect(() => {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
  }, []);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between p-2 bg-dark text-white">
        <div>
          <h2>FakeStore</h2>
        </div>
        <div className="d-flex gap-3">
          <span>Home</span>
          <span>Electronics</span>
          <span>Jewelery</span>
          <span>Men's Fashion</span>
          <span>Women's Fashion</span>
        </div>
        <div className="d-flex gap-2">
          <span className="bi bi-search"></span>
          <span className="bi bi-heart"></span>
          <span className="bi bi-person"></span>
          <span className="bi bi-cart"></span>
        </div>
      </header>

      <section className="mt-4 row">
        <nav className="col-2">
          <div>
            <label className="form-label">Select Category</label>
            <div>
              <select className="form-select" onChange={HandleCategoryChange}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>

        <main className="col-10 d-flex flex-wrap justify-content-evenly">
          {products.map((item) => (
            <div className="card m-2 p-2 " key={item.id}>
              <img
                src={item.image}
                height={150}
                alt="product_img"
                className="cart-image-top"
              />
              <div className="card-header">
                <p className="card-title">{item.category}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price:</dt>
                  <dd>${item.price}</dd>
                  <dt>Rating:</dt>
                  <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    {/* {item.rating.rate} [{item.rating.count}] */}
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm w-100 ">
                  <span className="bi bi-cart4"></span>Add To Cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}
