export default function Footer() {
    return (
      <div className="footer-container">
        <footer className="py-3 my-4 fixed-bottom bg-dark text-light">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-light"> 🏡 Home &nbsp; |</a></li>
            <li className="nav-item"><a href="/cadastro" className="nav-link px-2 text-light"> ®️ Faça seu cadastro grátis</a></li>
            <li className="nav-item"><a href="mailto:mariana.rj89@gmail.com" className="nav-link px-2 text-light"> 📧 Fale Conosco</a></li>
          </ul>
          <p className="text-center text-light">© 2024 MSR Drive</p>
          <img src="/logo_h.png" alt="Logo" style={{ maxWidth: "130px" }} className="mx-auto d-block" />

        </footer>
      </div>
    );
  }
  