export function CardProducto() {
    return (
      <div className="card mx-auto" style={{ width: "25rem", height: "40rem" }}>
        <img
          src="/1.png"
          className="card-img-top shadow-sm rounded border"
          alt="..."
        ></img>
        <div className="card-body d-flex flex-column justify-content-between shadow-sm rounded border">
          <div style={{ width: "23rem", height: "1rem" }}>
            <h5 className="card-title">Nombre Producto</h5>
            <p className="card-text ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptatibus maiores ipsa ducimus quisquam magnam, perferendis iusto
              impedit! Itaque, porro?
            </p>
            <div className="d-flex justify-content-between">
              <a
                href="#"
                className="btn btn-primary shadow-sm"
                style={{ width: "7rem", height: "3rem" }}
              >
                Ver más
              </a>
              <a
                href="#"
                className="btn btn-primary shadow-sm"
                style={{ width: "4rem", height: "4rem" }}
              >
                <img
                  src="/shopping-cart.svg"
                  alt="shopping cart"
                  className="img-fluid"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  