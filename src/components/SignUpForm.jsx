import {useState} from 'react'

function SignUpForm({setToken}) {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

async function handleSubmit(event){
    event.preventDefault();
    try{
        const res = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
            {
            method: "POST",
            header:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const data = await res.json()
        console.log(data)
        setToken(res.token)
    }catch(error){
    console.log(error)
}
   
}
    return(
    <>
    <h2>Sign Up!</h2>
    {
        error && <p>{error}</p>
    }
    <form onSubmit={handleSubmit}>
        <label>
        Username: 
        <input name="username" 
        onChange={(event) =>
        setUsername(event.target.value)}/>
        </label>
        <label>
        Password: 
        <input name="password" 
        onChange={(event) =>
        setPassword(event.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
    </>
    )
  }

  export default SignUpForm