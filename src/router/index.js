import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import ContactList from "../views/ContactList.vue";
import ContactShow from "../views/ContactShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ContactList",
    component: ContactList,
    props: true
  },
  {
    path: "/contact/:id",
    name: "ContactShow",
    component: ContactShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("contact/fetchContact", routeTo.params.id)
        .then(contact => {
          routeTo.params.contact = contact;
          next();
        });
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
