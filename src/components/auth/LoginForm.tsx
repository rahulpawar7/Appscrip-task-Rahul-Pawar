import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      document.cookie = "token=authenticated";
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginText}>Login</h1>
      <p>Click on login for home desing</p>
      <form onSubmit={handleLogin} className={styles.formContainer}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
