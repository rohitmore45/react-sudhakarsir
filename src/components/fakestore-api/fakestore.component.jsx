import { useEffect, useState } from "react";
import "./fakestore.component.css";
import $ from "jquery";

export function FakeStoreComponent() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([{}]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  function handleHomeClick() {
    LoadProducts("https://fakestoreapi.com/products");
  }
  function GetCartCount() {
    setCartCount(cartItems.length);
  }

  function handleAddToCart(e) {
    // setCartItems([...cartItems, item]);
    // GetCartCount();
    if (cartItems.find((item) => item.id == e.target.id)) {
      alert("Item already in cart..");
    } else {
      fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then((response) => response.json())
        .then((data) => {
          cartItems.push(data);
          GetCartCount();
          alert(`${data.title}\n Added to Cart`);
        });
    }
  }
  function LoadCategories() {
    //fetching using jquery method ajax
    $.ajax({
      method: "get",
      url: "https://fakestoreapi.com/products/categories",
      success: (response) => {
        response.unshift("all");
        setCategories(response);
        // console.log(response);
      },
      error: (response) => {
        // console.log(response);
      },
    });

    // fetch("https://fakestoreapi.com/products/categories")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(categories);
    //     data.unshift("all");
    //     setCategories(data);
    //   });
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
        `https://fakestoreapi.com/products/category/${event.target.value}`
      );
    }
  }
  useEffect(() => {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
    // GetCartCount();
  }, []);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between p-2 bg-dark text-white">
        <div>
          <h2>FakeStore</h2>
        </div>
        <div className="d-flex gap-3">
          <span>
            <button onClick={handleHomeClick} className="btn text-white">
              Home
            </button>
          </span>
          <span>Electronics</span>
          <span>Jewelery</span>
          <span>Men's Fashion</span>
          <span>Women's Fashion</span>
        </div>
        <div className="d-flex gap-2">
          <span className="bi bi-search"></span>
          <span className="bi bi-heart"></span>
          <span className="bi bi-person"></span>
          <button
            className="btn btn-light position-relative"
            data-bs-target="#cart"
            data-bs-toggle="modal"
          >
            <span className="bi bi-cart"></span>
            <span className="badge bg-danger position-absolute rounded-circle">
              {cartCount}
            </span>
          </button>
          <div className="modal fade" id="cart">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="text-primary">Your Cart Items</h2>
                  <button
                    className="btn btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>
                            <img src={item.image} height={100} />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <button className="btn btn-danger btn-sm">
                              <span className="bi bi-trash-fill"></span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
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
            <div className="card m-2 p-2" key={item.id}>
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
                    {/* {item.rating.rate} {item.rating.count} */}
                  </dd>
                </dl>
              </div>
              <div className="card-footer">
                <button
                  id={item.id}
                  className="btn btn-primary btn-sm w-100"
                  onClick={handleAddToCart}
                >
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
