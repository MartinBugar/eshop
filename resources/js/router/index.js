import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home';
import Register from '../pages/Auth/Register.vue';
import Login from '../pages/Auth/Login.vue';
import UserProfile from "../components/UserProfile/UserProfile.vue";
import EditUserProfile from "../components/UserProfile/EditUserProfile.vue";
import ContactUs from "../pages/ContactUs.vue";
import AboutUs from "../pages/AboutUs.vue";
import VerifyEmail from "../pages/Auth/VerifyEmail.vue";
import CheckYourEmail from "../pages/Auth/CheckYourEmail.vue";


export const routes = [
    {
        name: 'aboutus',
        path: '/aboutus',
        component: AboutUs
    },
    {
        name: 'contactus',
        path: '/contactus',
        component: ContactUs
    },
    {
        name: 'userprofile',
        path: '/userprofile',
        component: UserProfile
    },
    {
        name: 'edituserprofile',
        path: '/edituserprofile/:id',
        component: EditUserProfile
    },
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'verifyemail',
        path: '/verify-email',
        component: VerifyEmail
    },
    {
        name: 'CheckYourEmail',
        path: '/checkEmail',
        component: CheckYourEmail
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
