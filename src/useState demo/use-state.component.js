import { useState } from "react";


export function UseStateComponent() {
  const [categories] = useState(['Electronic', 'Footwear']);

  const [userName, setUserName] = useState('');

  function HandleUserName(e) {
    // console.log(e.target.value)
    setUserName(e.target.value)
  }

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [city, setCity] = useState('')
  const [stock, setStock] = useState(false)

  function nameChange(e) {
    setName(e.target.value);
  }
  function priceChange(e) {
    setPrice(e.target.value);
  }
  function cityChange(e) {
    setCity(e.target.value);
  }
  function stockChange(e) {
    setStock(e.target.checked);
  }

  return (
    <div>
      <ol>
        {
          categories.map(category =>
            <li key={category}>{category}</li>
          )
        }

      </ol>

      <div className="container-fluid">
        <h2>Register User</h2>
        <dl>
          <dt>User Name:</dt>
          <dd><input type="text" onKeyUp={HandleUserName} /></dd>
        </dl>
        <p>Hello {userName}</p>
        <hr />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <h2>Register</h2>
            <dl>
              <dt>Name:</dt>
              <dd><input type="text" onChange={nameChange} /></dd>

              <dt>Price</dt>
              <dd><input type="number" onChange={priceChange} /></dd>

              <dt>select city</dt>
              <dd>
                <select onChange={cityChange} >
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>
              </dd>

              <dt>Stock</dt>
              <dd><input type="checkbox" onChange={stockChange} />Available</dd>
            </dl>
          </div>
          <div className="col-sm-9">
            <h2>Details</h2>
            <dl>
              <dt>Name:</dt>
              <dd>{name}</dd>

              <dt>Price:</dt>
              <dd>{price}</dd>

              <dt>City:</dt>
              <dd>{city}</dd>

              <dt>Stock:</dt>
              <dd>{(stock) ? 'Available' : 'Out of Stock'}</dd>
            </dl>
          </div>

        </div>


      </div>
    </div>
  )
}