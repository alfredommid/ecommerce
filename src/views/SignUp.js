import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from '../hooks/useForm'
import './signup.scss';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const [error, setError] = useState(false)

    const history = useHistory();
    const sendForm = (inputs) => {
        console.log('Desde sendForm', inputs);
        if(input.password !== input.conf_password || input.password.length < 8){
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);
            return
        }
            console.log('Todo bien');
            delete input.conf_password;
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup',input)
                .then(({data, status}) => {
                    console.log(data, status);
                    history.push('/login');
                })
                .catch(error => {
                    console.error(error);
                })
    }

    const {
        input,
        handleInput,
        handleSubmit
    } = useForm(sendForm, {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        conf_password:"",
        role:"ADMIN"
    });

    return ( 
        <div className="justify content-center p-2 mt-4 mb-4 contenedor">
            <h3 className="p-3 text-center title">REGISTRO</h3>
            <Form onSubmit={handleSubmit} className="justify-content-center cuestionario">
                <Row className="justify-content-center" form>
                    <Col md={10}>
                        <FormGroup className="justify content-center">
                            <Label >Nombre</Label>
                            <Input className="inputs" required type="text" name="first_name" id="first_name" placeholder="p. ej. Tommy" value={input.first_name} onChange={handleInput}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center" form>
                    <Col md={10}>
                        <FormGroup>
                            <Label >Apellido</Label>
                            <Input className="inputs" required type="text" name="last_name" id="last_name" placeholder="p. ej. Oliver" value={input.last_name} onChange={handleInput}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center" form>
                    <Col md={10}>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input className="inputs" required type="email" id="email" placeholder="p. ej. greenpowa@mightymail.com" value={input.email} onChange={handleInput}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center" form>
                    <Col md={10}>
                    <FormGroup>
                        <Label for="password">Contraseña</Label>
                        <Input className="inputs" required type="password" id="password" placeholder="mínimo 8 caracteres" value={input.password} onChange={handleInput}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center" form>
                    <Col md={10}>
                    <FormGroup>
                        <Label for="conf_password">Confirmar contraseña</Label>
                        <Input className="inputs" required type="password" name="conf_password" id="conf_password" value={input.conf_password} onChange={handleInput}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center" form>
                    <Button type="submit" className="btn_sub"><svg className="w-6 h-6 next" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Button>
                </Row>
                {(error)
                    ? <p className="error-msg py-3 mb-2 text-center">Las contraseñas no coinciden</p>
                    : null}
                
            </Form>
        </div>
     );
}
 
export default SignUp;