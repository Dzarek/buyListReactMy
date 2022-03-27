import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Login = () => {
  const { setLogin, rememberLogin, setRememberLogin } = useGlobalContext();
  const [formName, setFormName] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const goodName = "zakupy";
  const goodPassword = "zakupy123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formName === goodName && formPassword === goodPassword) {
      setLogin(false);
      setFormName("");
      setFormPassword("");
      setShowWarning(false);
    }
    if (formName !== goodName || formPassword !== goodPassword) {
      setFormName("");
      setFormPassword("");
      setShowWarning(true);
    }
  };
  return (
    <form className="login-wrapper">
      <h2>LOGOWANIE</h2>
      {showWarning && (
        <h4 className="warning">
          Niepoprawne dane logowania! <br />
          Spróbuj ponownie.
        </h4>
      )}
      <section className="login-name">
        <label htmlFor="name">IMIĘ:</label>
        <input
          id="name"
          type="text"
          placeholder="zakupy"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </section>
      <section className="login-password">
        <label htmlFor="password">HASŁO:</label>
        <input
          id="password"
          type="password"
          placeholder="zakupy123456"
          value={formPassword}
          onChange={(e) => setFormPassword(e.target.value)}
        />
      </section>
      <section className="login-remember">
        <input
          id="remember"
          type="checkbox"
          checked={rememberLogin}
          onChange={() => setRememberLogin(!rememberLogin)}
        />
        <label htmlFor="remember">ZAPAMIĘTAJ MNIE</label>
      </section>
      <button type="submit" onClick={handleSubmit}>
        Zaloguj się
      </button>
    </form>
  );
};

export default Login;
