import { useState } from "react";
import { registerCompanyRepository } from "../../Repository/databaseRepository";


const RegisterCompanyLoginViewModel = () => {
    const [secureMode, setSecureMode] = useState(true);
    const [secureMode2, setSecureMode2] = useState(true);
    const [statusError, setStatusError] = useState('');
    const [message, setMessage] = useState('');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const checkImputEmpty = () => {
        if (email === '') {
            setStatusError(strings.emailLabel);
            setMessage(strings.emailErrorMessage);
            return false
        } else if (senha === '') {
            setStatusError(strings.passwordLabel);
            setMessage(strings.passwordErrorMessage);
            return false
        } else if (confirmarSenha === '') {
            setStatusError(strings.confirmPasswordLabel);
            setMessage(strings.confirmPasswordErrorMessage);
            return false
        } else if (confirmarSenha !== senha) {
            setStatusError(strings.confirmPasswordLabel);
            setMessage(strings.passwordMismatchErrorMessage);
            return false
        }
        return true
    }

    const registerCompany = (user) => {
        registerCompanyRepository(user);
    };

    const strings = {
        registerLoginTitle: "Register login",
        emailLabel: "Email",
        passwordLabel: "Senha",
        confirmPasswordLabel: "Confirmar senha",
        emailErrorMessage: "Enter Email",
        passwordErrorMessage: "Enter Password",
        confirmPasswordErrorMessage: "Confirm your password",
        finishButton: "Finish",
        emailErrorMessage: "Digite o seu e-mail",
        passwordErrorMessage: "Digite a sua senha",
        confirmPasswordErrorMessage: "Repita a sua senha",
        passwordMismatchErrorMessage: "As senhas não correspondem"
    };

    return {
        registerCompany,
        secureMode, setSecureMode,
        secureMode2, setSecureMode2,
        statusError,
        message,
        email, setEmail,
        senha, setSenha,
        confirmarSenha, setConfirmarSenha,
        strings, checkImputEmpty
    }

}

export default RegisterCompanyLoginViewModel;

