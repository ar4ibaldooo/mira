import { createWebHistory, createRouter } from "vue-router";
import Complaint from "@/views/Сomplaint.vue";


const routes = [
    {
        path: '/',
        name: "Complaint",
        component: Complaint
    },
    {
        path: '/notes',
        name: "Notes",
        component: () => import('../views/Notes.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;