"use client"
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí podrías enviar una solicitud a tu API para iniciar sesión
    console.log("Iniciando sesión...");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5"></h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h1 className="text-center mb-5">Iniciar sesión</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </div>
        <div className="col-md-6">
          <h1 className="text-center mb-5">Registrarse</h1>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group controlId="formBasicType">
              <Form.Label>Tipo de documento</Form.Label>
              <Form.Control as="select">
                <option value="rut">RUT</option>
                <option value="dni">DNI</option>
                <option value="passport">Pasaporte</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicDocumentNumber">
              <Form.Label>Número de documento</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu número de documento" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
