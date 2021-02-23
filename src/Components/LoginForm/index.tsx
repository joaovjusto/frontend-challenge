/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";

import { Form } from "react-bootstrap";
import { ILoginForm } from "./LoginForm";
import { Button } from "../Basic";
import styles from "./LoginForm.module.scss";

const LoginForm: React.FunctionComponent<ILoginForm.IProps> = (): JSX.Element => {
    const loginUser = (event: Event) => {
        event.preventDefault(); // don't redirect the page
        // where we'll add our form logic
        console.log("das");
    };

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [validMail, setValidMail] = useState(true);

    useEffect(() => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValidMail(
            login !== "" ? re.test(String(login).toLowerCase()) : true
        );
    }, [login]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.minHeight}>
                    <div className="d-flex flex-column">
                        <h1>Olá, seja</h1>
                        <h1>bem vindo!</h1>
                    </div>
                    <h3 className="mt-3 mb-5">
                        Para acessar a plataforma, faça seu login.
                    </h3>
                    <Form onSubmit={() => loginUser}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-MAIL</Form.Label>
                            <input
                                className={validMail ? "valid" : "invalid"}
                                type="email"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                placeholder="user.name@mail.com"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="mt-3">SENHA</Form.Label>
                            <input
                                className="invalid"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                required
                                placeholder="*******"
                            />
                        </Form.Group>
                        <Button className="mt-4" type="submit">
                            ENTRAR
                        </Button>
                    </Form>
                    <div className="d-flex flex-column mt-4">
                        <span>Esqueceu seu login ou senha?</span>
                        <span>
                            Clique <u>aqui</u>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export { LoginForm };
