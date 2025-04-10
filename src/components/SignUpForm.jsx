import {useState} from 'react'

function SignUpForm({setToken}) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

async function handleSubmit(event){
    event.preventDefault();
    if(username.length < 8){
        setError("Username must be 8 characters long.")
        return;
    }
    if(password.length < 6){
        setError("Password must be 6 or more characters long")
        return;
    }
    try{
        const res = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
            {
            method: "POST",
            header:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        const data = await res.json()
        console.log(res)
        setToken(data.token)
    }catch(error){
    setError(error.message)
}
   
}
    return(
    <>
    <h2>Sign Up!</h2>
    {
        error && <p classname="error">{error}</p>
    }
    <form onSubmit={handleSubmit}>
        <label>
        Username: 
        <input 
        name="username" 
        onChange={(event) =>
        setUsername(event.target.value)}
        value={username}
        />
        </label>
        <label>
        Password: 
        <input 
        name="password" 
        onChange={(event) =>
        setPassword(event.target.value)}
        value={password}
        />
        </label>
        <button>Submit</button>
    </form>
    </>
    )
  }

  export default SignUpForm