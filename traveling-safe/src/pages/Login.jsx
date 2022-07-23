import React from "react";
import "../styles/Login.scss";
import Beach from "../assets/beachLandin.png";
import Logo from "../assets/logo-paraTraveling-safe.gif";
import Google from "../assets/search.png";
import Modal from "react-modal";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../context/autContext";
import { useHistory } from "react-router-dom";
import "../styles/ResponsiveLogin.scss";

Modal.setAppElement("#root");

export function Login() {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword, createUser } = useAuth();
  const [error, setError] = useState("");
  const [emailCreate, setEmailCreate] = useState("");
  const [passwordCreate, setPasswordCreate] = useState("");
  const [errorModal, setErrorModal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const userCreate = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailCreate, passwordCreate);
    try {
      await createUser(emailCreate, passwordCreate);
      closeModal();
    } catch (errorModal) {
      setErrorModal(errorModal.message);
    }
    setEmailCreate("");
    setPasswordCreate("");
  };

  // const userCreate = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //
  // };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError("We sent you an email. Check your inbox");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="page-Auth">
      <aside>
        <img src={Beach} alt="" />
      </aside>
      <main>
        <div className="main-content mb-5 col-md-12">
          <img
            src={Logo}
            alt="Logo de Trsavelin safe"
            width={700}
            height="500"
          />

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
          >
            <form onSubmit={userCreate}>
              <h1>Registraté</h1>
              {error ? (
                <div className="alert alert-danger">{errorModal}</div>
              ) : null}

              <input
                type="email"
                value={emailCreate}
                placeholder="ingrese su email"
                onChange={(e) => setEmailCreate(e.target.value)}
              />
              <input
                type="password"
                value={passwordCreate}
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPasswordCreate(e.target.value)}
              />
              <button>Registrase</button>
            </form>
          </Modal>

          <form className="mb-5" onSubmit={handleSubmit}>
            {error ? (
              <div className="alert  text-center col-sm-4 col-md-12">
                {error}
              </div>
            ) : null}

            <input
              type="email"
              name="email"
              placeholder="Ingrese su E-mail"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="ingrese su Contraseña"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-warning">
              Entrar
            </button>
            <button onClick={handleGoogleSignin}>
              <img src={Google} width={30} height={30} alt="" />
              Iniciar Session con Google
            </button>

            <button onClick={handleResetPassword}>Olvide mi contraseña</button>
            <button onClick={openModal}>Registrarse</button>
          </form>
          
        </div>
      </main>
    </div>
  );
}
