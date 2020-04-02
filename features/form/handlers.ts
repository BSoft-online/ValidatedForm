import React from 'react';
import { login } from 'services/auth';
import { validateEmail, validatePassword } from './validators';

type Setters = {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setEmailError: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setPasswordError: React.Dispatch<React.SetStateAction<string>>;
    setServiceError: React.Dispatch<React.SetStateAction<string>>;
    setServiceResponse: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const handleEmailChange = (setters: Setters) => (
    e: React.ChangeEvent<HTMLInputElement>
): void => {
    const text = e.currentTarget.value;
    setters.setEmail(text);
    setters.setEmailError(validateEmail(text));
};

export const handlePasswordChange = (setters: Setters) => (
    e: React.ChangeEvent<HTMLInputElement>
): void => {
    const text = e.currentTarget.value;
    setters.setPassword(text);
    setters.setPasswordError(validatePassword(text));
};

export const handleSubmit = ({
    setters,
    email,
    password,
}: {
    setters: Setters;
    email: string;
    password: string;
}) => async (): Promise<void> => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    setters.setEmailError(emailError);
    setters.setPasswordError(passwordError);
    if (emailError || passwordError) return;

    setters.setLoading(true);
    const { result, error } = await login(email);
    setters.setServiceError(error ? error : '');
    result && setters.setServiceResponse(result);
    setters.setLoading(false);
};

export const handleLogout = (setters: Setters) => (): void => {
    setters.setEmail('');
    setters.setEmailError('');
    setters.setPassword('');
    setters.setPasswordError('');
    setters.setServiceError('');
    setters.setServiceResponse('');
    setters.setLoading(false);
};
