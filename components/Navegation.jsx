import Link from 'next/link'

function Navegation() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/" >FURRYFOODS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Iniciar Session</a>
            </li>
            <a
              href="#"
              className="btn btn-primary shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: "4rem", height: "2rem", padding: "0.5rem" }}
            >
              <img
                src="/shopping-cart.svg"
                alt="shopping cart"
                className="img-fluid"
                style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
              />
            </a>
            <li className="nav-item">
              <a className="nav-link" href="/admin">admin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navegation