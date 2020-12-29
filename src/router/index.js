import Vue from 'vue'
import Router from 'vue-router'

// import system from './modules/system'


Vue.use(Router)

const router = new Router({
        mode:'history',
        routes:[
            // ...system,
            {
                path:'/',
                redirect:'/login',
                component:{
                    render(c){
                       return c('router-view')
                    }
                },
                children:[{
                    path:'login',
                    name:'login',
                    component:()=> import('@/views/login/index')
                }]
            }
        ]
    }
)


export default router
