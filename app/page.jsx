import {CardProducto} from "@/components/CardProducto"

function IndexPage() {
  return (
    <div className="container my-5">
      <h1 className="text-center">Productos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
        <div className="col mb-4">
          <CardProducto />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
