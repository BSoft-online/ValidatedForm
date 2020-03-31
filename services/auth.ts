import { randomBool } from 'utils/helpers';

export const login = async (email: string): Promise<object> => {
    await new Promise((res) => {
        setTimeout(() => res(), 1000);
    });

    return randomBool()
        ? { email }
        : { error: 'Server error occured. Please try again later' };
};
