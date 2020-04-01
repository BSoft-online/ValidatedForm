import React from 'react';
import { login } from 'services/auth';
import { validateEmail, validatePassword } from './functions';

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

export const handleSubmit = (
    setters: Setters,
    email: string
) => async (): Promise<void> => {
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
