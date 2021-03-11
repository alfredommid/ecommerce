import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import shop from '../assets/shop.svg'
import './login.scss';
import useForm from '../hooks/useForm'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const LogIn = () => {
    const [error, setError] = useState(false)
    const history = useHistory();
    const sendForm = inputs => {
        console.log('Desde sendForm', inputs);
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', input)
            .then(({data, status}) => {
                console.log(data,status);
                const {token} = data;
                window.localStorage.setItem('token', token);
                history.push('/shop');
            })
            .catch(error => {
                console.error(error.response.data);
                setError(true);
                setTimeout(() => {
                    setError(false)
                }, 3000);
            })
    }

    const {input, handleInput, handleSubmit} = useForm(sendForm, {
        email:'',
        password:''
    })

    return (
            <Row div className="mx-4 mt-5">
                <Col md={5} className="left">
                    <div className="my-5">
                        <h2 className="text-center">Inicia Sesión</h2>
                    </div>
                    <Form onSubmit={handleSubmit} className="ml-3">
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Correo</Label>
                                    <Input type="email" name="email" value={input.email} onChange={handleInput} id="email" placeholder="with a placeholder" className="inputs"/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input type="password" name="password" value={input.password} onChange={handleInput} id="password" placeholder="password placeholder" className="inputs"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                            <Button className="btn-submit mt-3">Sign in</Button>
                        </div>
                        {error 
                            ? <p className="error-msg py-3 mt-3 text-center">El correo o la contraseña no coinciden.</p> 
                            : null}
                    </Form>
                </Col>
                <Col md={7} className="container right d-flex justify-content-center">
                        <img src={shop} alt="shop-img" className="shop mt-4 mr-5"/>
                </Col>
            </Row>
    );
}

export default LogIn;