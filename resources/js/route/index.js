import { createWebHistory, createRouter } from "vue-router";

import Home  from "../components/home/Index";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
