const routes = [
    { path: '/', component: homeComponent },
    { path: '/naota', component: naotaComponent },
]

const router = VueRouter.createRouter({
    //history: VueRouter.createMemoryHistory(),
    history: VueRouter.createWebHashHistory(),
    routes,
})