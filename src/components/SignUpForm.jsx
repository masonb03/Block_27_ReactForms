import {useState} from 'react'






function SignUpForm() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(null)

async function handleSubmit(event){
    event.preventDefault();
    try{
        const res = await fetch('')
    }catch(error){
    console.log(error)
}
    console.log("Hello")
}
    return(
    <>
    <h2>Sign Up!</h2>
    <form onSubmit={handleSubmit}>
        <label>
        Username: 
        <input name="username" 
        onChange={(event) =>
        setUsername(event.target.value)}
        value={username}/>
        </label>
        <label>
        Password: 
        <input name="password" 
        onChange={(event) =>
        setPassword(event.target.value)}
        value={password}/>
        </label>
        <button>Submit</button>
    </form>
    </>
    )
  }

  export default SignUpForm