"use client"
import { useState } from 'react';

function Product() {
  const nombre = 'Producto ejemplo';
  const descripcion = 'Descripción del producto ejemplo';
  const precio = 9.99;
  const id = '123abc';

  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };
  
  return (
    <div className="container shadow p-3 mb-5 bg-body-tertiary rounded" >
      <div className="row">
        <div className="col-md-4" >
          <div className="card " style={{borderRadius:"15px"}} >
            <img className="card-img-top"style={{borderRadius:"15px"}}  src="/1.png" alt="Producto ejemplo" />
          </div>
        </div>
        <div className="col-md-4 offset-md-4 align-self-center">
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <p className="text-right">Precio: ${precio}</p>
      <div className="d-flex justify-content-between align-items-center" style={{width:"10rem"}}>
        <button className="btn btn-sm btn-outline-secondary" onClick={decrementCount}>-</button>
        <h2>{count}</h2>
        <button className="btn btn-sm btn-outline-secondary" onClick={incrementCount}>+</button>
      </div>
      <button className="btn btn-primary" >Agregar al carrito</button>
    </div>

        
      </div>

    </div>
  );
}

export default Product;
