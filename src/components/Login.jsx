import { Card, Form, Button, Alert } from "react-bootstrap";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
//   const [firebaseError, setFirebaseError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
  
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.error("Erro no Firebase: ", error.message); 
    //   setFirebaseError("🚨 Ocorreu um erro: " + error.message);
      setError("🚨 Ocorreu um erro ao fazer o login!");
    }
    setLoading(false);
  }
  
  return (
    <div>
      <Card>
        <Card.Body>
        <div className="d-flex justify-content-center mb-4">
        <img src="/logo.png" alt="Logo" style={{ maxWidth: '120px' }} />
      </div>
          <h2 className="text-center mb-4">Acesse sua conta</h2>
          {/* {firebaseError && <Alert variant="danger">{firebaseError}</Alert>} */}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit">
              Fazer Login
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2"></div>
      </Card>
      <div className="w-100 text-center mt-2">
        Ainda não tem uma conta? <Link to="/cadastro"> Faça seu cadastro </Link>
      </div>
    </div>
  );
}
