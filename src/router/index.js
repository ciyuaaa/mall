import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import("views/home/Home")
const Category = () => import("@/views/category/Category")
const BuyCart = () => import("@/views/buycart/BuyCart")
const Detile = () => import("views/detiles/Detile")

const Profile = () => import("views/profile/Profile")
const UserInfo = () => import("views/profile/childView/UserInfo")
const SetUserName = () => import("views/profile/childView/subChildView/SetUserName")
const SetPassword = () => import("views/profile/childView/subChildView/SetPassword")
const Login = () => import("views/login/Login")

Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component: Home,
  },
  {
    path:"/category",
    component: Category
  },
  {
    path:"/buycart",
    component: BuyCart
  },
  {
    path:"/profile",
    component: Profile,
    children: [
      {
        path: 'userinfo',
        component: UserInfo,
        children: [
          {
            path: 'setusername',
            component: SetUserName
          },
          {
            path: 'setpassword',
            component: SetPassword
          }
        ]
      }
    ]
  },
  {
    path:"/detiles/:id",
    component: Detile
  },
  {
    path: '/userinfo',
    component: UserInfo
  },
  {
    path: "/login",
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
