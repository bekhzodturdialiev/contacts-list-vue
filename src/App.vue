<template>
  <div id="app">
    <div class="wrapper d-flex col-xl-10 m-auto">
      <Menu />
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: { Menu }
};
</script>

<style lang="scss"></style>
