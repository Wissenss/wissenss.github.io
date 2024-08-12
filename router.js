const routes = [
    { path: '/', component: homeComponent },
    { path: '/naota', component: naotaComponent },
]

const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
})