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
                <Form onSubmit={() => loginUser}>
                    <div className={styles.minHeight}>
                        <div className="d-flex flex-column">
                            <h1>Olá, seja</h1>
                            <h1>bem vindo!</h1>
                        </div>
                        <h3 className="mt-3 mb-5">
                            Para acessar a plataforma, faça seu login.
                        </h3>
                        <Form.Group
                            controlId="formBasicEmail"
                            className="position-relative"
                        >
                            <Form.Label>E-MAIL</Form.Label>
                            <input
                                className={!validMail ? styles.invalid : ""}
                                type="email"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                placeholder="user.name@mail.com"
                                required
                            />
                            {!validMail ? (
                                <small className={styles.invalidInput}>
                                    Digite um e-mail válido;
                                </small>
                            ) : (
                                ""
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="mt-4">SENHA</Form.Label>
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
                        <div className="mt-4 d-none d-sm-block text-center">
                            <span>Esqueceu seu login ou senha?</span>
                            <span className="d-block">
                                Clique <u>aqui</u>
                            </span>
                        </div>
                        <div className="d-block d-sm-none mb-3" />
                    </div>
                </Form>
                <div className="text-center mt-4 d-block d-sm-none">
                    <span className="d-block">
                        Esqueceu seu login ou senha?
                    </span>
                    <span>
                        Clique <u>aqui</u>
                    </span>
                </div>
            </div>
        </>
    );
};

export { LoginForm };
