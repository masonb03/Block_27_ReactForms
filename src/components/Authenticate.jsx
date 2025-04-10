import { useState } from 'react';

function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState(null);

  async function handleClick() {
    console.log(token)
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
        {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })

      const result = await response.json()
      console.log(result)
    } catch (err) {
      console.error(err)
      setError(err.message);
    }
  }

  return (
    <div className="auth-container">
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
      {auth ? (
        <div>
          <h2>Your username is {auth.username}</h2>
          <h2>Your token is {token}</h2>
        </div>
      ) : (
        <h2>Please Sign in</h2>
      )}
    </div>
  );
}

export default Authenticate;
