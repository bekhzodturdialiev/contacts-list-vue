import Vue from "vue";
import VueRouter from "vue-router";
import nProgress from "nprogress";
import store from "@/store";
import ContactList from "../views/ContactList.vue";
import ContactShow from "../views/ContactShow.vue";
import ContactCreate from "../views/ContactCreate.vue";
import ContactEdit from "../views/ContactEdit.vue";

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
  },
  {
    path: "/create",
    name: "ContactCreate",
    component: ContactCreate
  },
  {
    path: "/contact/:id",
    name: "ContactEdit",
    component: ContactEdit,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  nProgress.start();
  next();
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
