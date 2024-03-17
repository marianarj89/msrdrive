import { useState, useEffect } from 'react';
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Erro no Firebase:", error); 
      setError('Ocorreu um erro ao fazer o logout!');
    }
  }

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <Header />
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Perfil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/editar-perfil" className="btn btn-primary w-100 mt-3">Editar Perfil</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <Footer/>
    </>
  );
}
