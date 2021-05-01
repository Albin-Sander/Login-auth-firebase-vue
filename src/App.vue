<template>
  <div id="nav">
    <Nav />
  </div>
  <router-view />
</template>

<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
  },
};
</script>

<style></style>
