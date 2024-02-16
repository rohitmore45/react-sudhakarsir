

export function DataBindingComponent() {

  var products = {
    Name: 'Samsung TV',
    Price: 442210.24,
    Stock: true,
  }

  var newProducts = ['Electronics', 'Fashion', 'Food', 'Footwear'];


  let productsData = [
    {
      name: 'samsung TV',
      price: 44545.22,
      stock: true,
    },
    {
      name: 'Mobiles',
      price: 32545.22,
      stock: false,
    },
    {
      name: 'Shoe',
      price: 5545.22,
      stock: true,
    },
  ];

  let menu = [
    { category: 'Electronics', products: ['TV', 'Mobile'] },
    { category: 'Footwear', products: ['Nike Casuals', 'Lee boot'] }

  ]
  return (
    <>
      <div className="container-fluid">
        <h2>Product Details</h2>
        <dl>
          <dt>Name:</dt>
          <dt>{products.Name}</dt>

          <dt>Price:</dt>
          <dt>{products.Price}</dt>

          <dt>Stock:</dt>
          <dt>{(products.Stock) ? 'Available' : 'Not available'}</dt>
        </dl>

        <ol>
          {
            newProducts.map(product => {
              return <li key={product}>{product}</li>
            })
          }
        </ol>
        <select>
          {
            newProducts.map(product => {
              return <option key={product}>{product}</option>
            })
          }
        </select>

        <ul className="list-unstyled">
          {
            newProducts.map(product => {
              return <li key={product}><input type="checkbox" />{product} </li>
            })
          }
        </ul>


        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              productsData.map(product =>
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{(product.stock) ? 'Available' : 'Out of stock'}</td>
                  <td>
                    <button className="btn btn-info btn-sm"><span className="bi bi-eye-fill"></span></button>
                    <button className="btn btn-warning btn-sm mx-2"><span className="bi bi-pen"></span></button>
                    <button className="btn btn-danger btn-sm"><span className="bi bi-trash"></span></button>


                  </td>
                </tr>
              )
            }
          </tbody>
        </table>


        <h2>Shopping menu</h2>
        <ol>

          {
            menu.map(item =>
              <li key={item.category}>{item.category}
                <ul>
                  {
                    item.products.map(product =>
                      <li key={product}>{product}</li>
                    )
                  }
                </ul>
              </li>
            )
          }
        </ol>


        <h2>Select Product</h2>
        <select className="mb-5">
          {
            menu.map(item =>
              <optgroup label={item.category} key={item.category}>{item.category}
                {
                  item.products.map(product =>
                    <option key={product}>{product}</option>
                  )
                }

              </optgroup>
            )
          }
        </select>


        <h2>select category</h2>
        {
          menu.map(item=>
            <details key={item.category} className="mb-5">
              <summary>{item.category}</summary>
              <ul>
                {
                  item.products.map(product=>
                      <li key={product}>{product}</li>
                    )
                }
              </ul>
            </details>

            )
        }
      </div>
    </>
  )
}