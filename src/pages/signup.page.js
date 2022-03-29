import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../services/user.service"

const SignupPage = (props) => {

    //keep email address 
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    //for navigation
    const navigate = useNavigate()

    const onSignup = () => {
        if (username.length === 0) {
            alert('please enter email')
        } else if (password.length === 0) {
            alert('please enter password')
        } else {
            //make the signup API call
            const result = signup(username, password)
            console.log(result)
            if (result) {
                 //go to 
                 navigate('/')
            }
        }
    }

    return (
        <div>
            <h1 className="header">SignUp</h1>
            <div className="form">
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
                        If you are already Registered ? Signin <Link to="/">here</Link>
                    </div>
                    <button onClick={onSignup} class="btn btn-success">Signup</button>
                </div>
            </div>
        </div>
    )
}

export default SignupPage