import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../services/user.service";

const SigninPage = (props) => {
    //state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onSignin = async() => {
        if (username.length === 0) {
            alert('Set Username')
        } else if (password.length === 0) {
            alert('Set Password')
        } else {
            const result = await signin(username, password)
            if (result) {
               const { token } = result
               
               //session Storage
               sessionStorage['token'] = token
               sessionStorage['username'] = username

               //redirect to task list
               navigate('/task-list')
            } else {
                alert('invalid username or password')
            }
        }
    }

    return <div>
        <h1 className="header">Signin</h1>
        <div class="form">
            <div class="mb-3">
                <label class="form-label">User Name</label>
                <input onChange={(e) => {
                    setUsername(e.target.value)
                }} type="email" class="form-control" />
            </div>

            <div class="mb-3">
                <label class="form-label">Password</label>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" class="form-control" />
            </div>

            <div class="mb-3">
                <div>
                    Don't have an account ? Signup <Link to="/signup">here</Link>
                </div>
                <button onClick={onSignin} class="btn btn-success">Signin</button>
            </div>
        </div>
    </div>
}

export default SigninPage