export const scoreToName = [
    'none', // no password at all
    'bad', // zxcvbn score === 0
    'weak', // zxcvbn score === 1
    'enough', // zxcvbn score === 2
    'good', // zxcvbn score === 3
    'strong', // zxcvbn score === 4
];

type Dictionary = { [index: string]: string };
export const scoreMessage: Dictionary = {
    none: '',
    bad: 'Very weak password',
    weak: 'Weak password',
    enough: 'Normal password',
    good: 'Strong password',
    strong: 'Very strong password!',
};

const makeClasses = (c: string): string[] => scoreToName.map((v) => `${c}${v}`);
export const markClasses = makeClasses('mark');
export const infoClasses = makeClasses('info');
