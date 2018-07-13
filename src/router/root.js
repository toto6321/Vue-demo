import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "./Home/Home";
import UserProfile from "./UserProfile/UserProfile";
import Root from "./Root";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Root,
      children: [
        {
          path: "home",
          name: "home",
          component: Home,
        }, {
          path: "user",
          name: "user",
          component: UserProfile,
        },
        {
          path: "hello",
          name: "hello",
          component: HelloWorld,
        },
      ],
    },
  ],
});
