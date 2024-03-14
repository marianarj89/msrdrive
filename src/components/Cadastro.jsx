import { Card, Form, Button, Alert } from "react-bootstrap";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { cadastro } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
  
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("🚨 As senhas precisam ser iguais!");
    }
  
    try {
      setError("");
      setLoading(true);
      await cadastro(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (error) {
      console.error("Erro no Firebase: ", error.message); 
      setFirebaseError("🚨 Ocorreu um erro: " + error.message);
      setError("🚨 Ocorreu um erro ao criar sua conta!");
    }
    setLoading(false);
  }
  
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Crie sua conta</h2>
          {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}
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
            <Form.Group id="password-confirm">
              <Form.Label>Confirme sua Senha</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit">
              Fazer Cadastro
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2"></div>
      </Card>
      <div className="w-100 text-center mt-2">
        Já tem uma conta? <Link to="/login"> Fazer Login </Link> 
      </div>
    </div>
  );
}
