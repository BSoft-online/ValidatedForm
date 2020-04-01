const checkEmail = (content = ''): boolean =>
    /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*\.+([\\.-]?\w+)+$/.test(content);

export const validateEmail = (email = ''): string =>
    email.trim()
        ? checkEmail(email)
            ? ''
            : 'Email address is not valid'
        : 'Email address is required';

export const validatePassword = (password = ''): string =>
    password.trim()
        ? password.length < 5
            ? 'Password is too short'
            : ''
        : 'Password is required';
