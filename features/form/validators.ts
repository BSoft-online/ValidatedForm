const checkEmail = (content = ''): boolean =>
    /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*\.+([\\.-]?\w+)+$/.test(content);

export const emailInvalidError = 'Email address is not valid';
export const emailRequiredError = 'Email address is required';
export const passwordInvalidError = 'Password is too short';
export const passwordRequiredError = 'Password is required';

export const validateEmail = (email = ''): string =>
    email.trim()
        ? checkEmail(email)
            ? ''
            : emailInvalidError
        : emailRequiredError;

export const validatePassword = (password = ''): string =>
    password.trim()
        ? password.length < 5
            ? passwordInvalidError
            : ''
        : passwordRequiredError;
