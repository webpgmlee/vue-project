import Home from '@/pages/Home'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import Cart from '@/pages/Cart'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signUp', component: SignUp},
    {path: '/cart', component: Cart},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;