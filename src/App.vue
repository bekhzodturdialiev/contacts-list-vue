<template>
  <div id="app">
    <div class="wrapper d-flex col-xl-9 col-lg-10 m-auto">
      <Menu />
      <NotificationContainer />
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import NotificationContainer from "@/components/NotificationContainer.vue";
export default {
  components: { Menu, NotificationContainer }
};
</script>
