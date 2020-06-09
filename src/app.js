import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios"
import store from '@/app/services/store/index.js'
import AppMain from "@/app/pages/MainPage.html"
// START PAGES
import HomePage from "@/app/pages/HomePage.html"
import AboutTeka from "@/app/pages/AboutUs.html"
import ProductList from "@/app/pages/Product.html"
// END PAGES

// START IMPORT
// END IMPORT

Vue.use(VueRouter);


const ROOT_PATH = "/";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: ROOT_PATH,
          component: {
            template: "<router-view></router-view>"
          },
          children: [
            {
              path: "",
              component: AppMain,
              children: [
                {
                  path: "/",
                  name: 'home.page',
                  component: HomePage
                },
                {
                  path: 'about-us',
                  name: 'about.us',
                  component: AboutTeka
                },
                {
                  path: 'product',
                  name: 'product.page',
                  component: ProductList
                }
              ]
            },
          ]
        }
    ]
})


var app = new Vue({
    el: "#app",
    router: router,
    store,
    data() {
      return {
        base_url: path => ROOT_PATH + "/" + (path || ""),
        asset: path => ROOT_PATH + "assets/" + path,
        activeLink: "home"
      };
    },
    mounted() {
      if(sessionStorage.getItem('__REG')) {
        store.commit('setLang', sessionStorage.getItem('__REG'))
      } else {
        axios.get('http://gd.geobytes.com/GetCityDetails?callback=?', {
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Content-Type': 'application/json'
          }
        }).then(_resp => {
          console.log(_resp)
        })
       
      }
    }
});
