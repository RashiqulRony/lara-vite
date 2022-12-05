import { createWebHistory, createRouter } from "vue-router";

import Home    from "../components/Home.vue";
import About   from "../components/About.vue";
import Header  from "../components/share/Header.vue";
import Footer  from "../components/share/Footer.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        components: {'default': Home, 'header': Header, 'footer': Footer},
    },
    {
        path: "/about",
        name: "About",
        components: {'default': About, 'header': Header, 'footer': Footer},
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
     scrollBehavior() {
         document.getElementById('mainBody').scrollIntoView({ behavior: 'smooth', block: 'start' });
     },
});

export default router;
