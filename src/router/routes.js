
const routes = [
    {
        path: '/login',
        name: 'Login', 
        component: () => import('../views/Login')
    },
    {
        path: '/',
        name: 'Agenda',
        component: () => import('../components/Agenda'),
        meta: { requiresAuth: true}
    },
    {
        path: '/pacientes',
        name: 'Pacientes',
        component: () => import('../components/Pacientes'),
        meta: { requiresAuth: true}
    },
    {
        path: '/expediente',
        name: 'Expediente',
        component: () => import('../components/Expediente'),
        meta: { requiresAuth: true}
    },
]

export default routes