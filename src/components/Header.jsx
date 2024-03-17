/* eslint-disable no-unused-vars */
import { Navbar, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Erro no Firebase:", error);
      setError("Ocorreu um erro ao fazer o logout!");
    }
  }

  if (!currentUser) {
    return null;
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top">
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <div
            className="d-flex justify-content-center mb-4"
            style={{ margin: "20px 0" }}
          >
            <img src="/logo_h.png" alt="Logo" style={{ maxWidth: "190px" }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">Novo Documento </Nav.Link>
          </Nav>
          <Nav.Link href="#" style={{ color: "lightblue", padding: "10px" }}>
            {" "}
            <strong>Usuário Logado:</strong> {currentUser.email}
          </Nav.Link>
        </Navbar.Collapse>
        <div></div>
        <Button variant="primary" onClick={handleLogout}>
        ❌ &nbsp; Sair &nbsp;
        </Button>
      </div>
    </Navbar>
  );
}
