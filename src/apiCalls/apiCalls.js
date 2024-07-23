const URL = 'http://localhost:4000/api/'

export const RegisterUser = async (credentials) => {
    try {
        const request = await fetch(`${URL}auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!request.ok) {
            throw new Error(`Error: ${request.status} ${request.statusText}`);
        }

        const result = await request.json();
        console.log(result);

        return result;
    } catch (error) {
        console.error('Registration error:', error);
        return { success: false, message: error.message };
    }
};

export const LoginUser = async (credentials) => {
    try {
        const request = await fetch(`${URL}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!request.ok) {
            throw new Error(`Error: ${request.status} ${request.statusText}`);
        }

        const result = await request.json();
        console.log(result);

        return result;
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: error.message };
    }
};

export const getProfile = async (token) => {
    try {
        const response = await fetch(`${URL}users/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Get profile error:', error);
        return { success: false, message: error.message };
    }
};
