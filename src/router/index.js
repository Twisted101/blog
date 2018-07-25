import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Pigeonhole from "@/components/Pigeonhole";
import Liqing from "@/components/Liqing";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    {
      path: "/pigeonhole",
      name: "pigeonhole",
      component: Pigeonhole
    },
    {
      path: "/liqing",
      name: "liqing",
      component: Liqing
    }
  ]
});
