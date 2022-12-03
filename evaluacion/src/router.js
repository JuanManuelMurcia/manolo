import { createWebHistory, createRouter} from "vue-router";

import Login from "./components/Login.vue";
import studets from "./components/studets.vue";
import teacher from "./components/teacher.vue";


const routes= [
    {
        path:"/",
        name:"Login",
        component: Login,
    },
    {
        path:"/studets",
        name:"studets",
        component: studets,
    },
    {
        path:"/teacher",
        name:"teacher",
        component: teacher,
    },
  
  
   
    ];
    
    const router=  createRouter(
        {
           history: createWebHistory(),
           routes,
        }
    );
    
    export default router;