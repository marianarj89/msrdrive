import { AuthProvider } from "../contexts/AuthContext";
import Cadastro from "./Cadastro";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
