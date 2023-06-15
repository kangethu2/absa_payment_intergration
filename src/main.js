import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/main.css';
import { createRouter, createWebHistory } from 'vue-router';
import payment_form from './components/payment_form';
import confirm_payment from './components/confirm_payment';
import payment_confirmation from './components/payment_confirmation';


const routes = [{
        path: '/',
        name: 'payment_form',
        component: payment_form,
        props: true
    },
    {
        path: '/./components/confirm_payment',
        name: 'confirm_payment',
        component: confirm_payment,
        props: true
    },
    {
        path: '/components/payment_confirmation',
        name: 'payment_confirmation',
        component: payment_confirmation,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');