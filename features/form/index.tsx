import React, { useState } from 'react';
import {
    Typography,
    OutlinedInput,
    Button,
    CircularProgress,
} from '@material-ui/core';
import { Container, Fieldset, ButtonsPanel } from './containers';
import { Label, ErrorMessage } from './elements';
import { Success } from './success';
import {
    handleEmailChange,
    handleLogout,
    handlePasswordChange,
    handleSubmit,
} from './handlers';

export const Form: React.FunctionComponent = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serviceError, setServiceError] = useState('');
    const [serviceResponse, setServiceResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const setters = {
        setEmail,
        setEmailError,
        setPassword,
        setPasswordError,
        setServiceError,
        setServiceResponse,
        setLoading,
    };

    return serviceResponse ? (
        <Success email={serviceResponse} onLogout={handleLogout(setters)} />
    ) : (
        <Container component="form">
            <Fieldset>
                <Typography
                    variant="h5"
                    color="primary"
                    align="center"
                    gutterBottom
                >
                    Log in
                </Typography>
                <Label>
                    <Typography variant="h6">Email</Typography>
                    <OutlinedInput
                        type="email"
                        name="email"
                        required
                        autoFocus
                        placeholder="Your email address"
                        onChange={handleEmailChange(setters)}
                        value={email}
                        fullWidth
                    />
                </Label>
                <Label>
                    <Typography variant="h6">Password</Typography>
                    <OutlinedInput
                        type="password"
                        name="password"
                        required
                        placeholder="Your password"
                        onChange={handlePasswordChange(setters)}
                        value={password}
                        fullWidth
                    />
                </Label>
                <ErrorMessage variant="body2" color="error">
                    {emailError || passwordError || serviceError}
                </ErrorMessage>
                <ButtonsPanel>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!!(emailError || passwordError || loading)}
                        fullWidth={false}
                        onClick={handleSubmit(setters, email)}
                    >
                        {loading ? (
                            <CircularProgress size={18} className="loader" />
                        ) : null}
                        <Typography>Submit</Typography>
                    </Button>
                </ButtonsPanel>
            </Fieldset>
        </Container>
    );
};
