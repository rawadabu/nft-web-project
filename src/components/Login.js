import React, { /* useEffect, */ useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../authContext/AuthContext"
import { Link, useHistory } from "react-router-dom"
import home from "../assests/login.png";

/*npm install react-bootstrap bootstrap@5.1.3 */
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const [/* flag, */ setflag] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("market")
            setflag(true)

        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }
    /*    if (flag) {
           navigate('market');
       }
    */
    return (

        <div className="login" >
            <Card.Body className="login-container">
                <div className="image-container">
                    <div className="image">
                        <img src={home} alt="home" />
                    </div>
                    <div className="ellipse-container">
                        <div className="ellipse pink"></div>
                        <div className="ellipse blue"></div>
                    </div>
                </div>
                <h2 className="title">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Group className="form-group" id="email">
                        <Form.Label className="form-label ">Email</Form.Label>
                        <Form.Control className="form-control" type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="button" type="submit">
                        Log In
                    </Button>
                    <div className="content">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </Form>

            </Card.Body>

        </div>

    )
}
