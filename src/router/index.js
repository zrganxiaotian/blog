import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Header from '@/components/Header'
import Write from '@/components/Write'
import Blogs from '@/components/Blogs'
import BlogDetails from '@/components/BlogDetails'
import Editor from '@/components/Editor'
import Login from '@/components/Login'
import Bloglist from '@/components/Bloglist'

Vue.use(Router)

export default new Router({
  mode:"history",
  base:"/blog",
  routes: [
    {
      path: '/',
      name: 'login',
      component:Login,
    },
    {
      path: '/header',
      name: 'Header',
      component:Header,
      children:[
        {
          path: '/write',
          name: 'Write',
          component: Write
        },
        {
          path: '/blogs',
          name: 'Blogs',
          component: Blogs
        },
        {
          path: '/blogdetails/:id',
          name: 'BlogDetails',
          component: BlogDetails
        },
        {
          path: '/editor/:id',
          name: 'Editor',
          component: Editor
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/bloglist',
          name: 'Bloglist',
          component:Bloglist,
        },
        {
          path:"*",
          name:'NotFound404',
          redirect:"/"
        }
      ]
    },
    {
      path:"*",
      name:'NotFound',
      redirect:"/"
    }
  ]
})
