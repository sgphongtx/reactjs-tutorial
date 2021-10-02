import { AUTH_LOGIN, AUTH_SIGN_UP } from 'app/const/Routes';

import Login from 'app/modules/auth/login';
import Signup from 'app/modules/auth/signup';

export const publicRoutes = [
    {
        key: 'Login Page',
        component: Login,
        exact: true,
        path: AUTH_LOGIN,
        private: false,
        title: 'login'
    },
    {
        key: 'Signup Page',
        component: Signup,
        exact: true,
        path: AUTH_SIGN_UP,
        private: false,
        title: 'sign_up'
    }
];

export const privateRoutes = [];

export const publicPaths = publicRoutes.map((route) => route.path);
export const privatePaths = privateRoutes.map((route) => route.path);
