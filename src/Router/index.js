import Vue from 'vue'
import Router from 'vue-router'
import App from '../Components/App.vue'
import Login from '../Components/Login.vue'
import Peliculas from '../Components/Peliculas.vue'
import Devolver from '../Components/Devolver.vue'
import Opciones from '../Components/Opciones.vue'
import Recargar from '../Components/Recargar.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            redirect: { name: 'Login' }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/opciones',
            name: 'Opciones',
            component: Opciones
        },
        {
            path: '/recargar',
            name: 'Recargar',
            component: Recargar
        },
        {
            path: '/peliculas',
            name: 'Peliculas',
            component: Peliculas
        },
        {
            path: '/devolver',
            name: 'Devolver',
            component: Devolver
        }
    ]
});