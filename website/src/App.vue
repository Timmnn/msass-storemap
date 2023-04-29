<template>
    <HeaderComp/>
  <main>
      <HeroBlock/>
  </main>
  <FooterComp/>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import HeroBlock from "./components/HeroBlock.vue";
import HeaderComp from "./components/HeaderComp.vue";
export default {
  name: "App",
  components: {
      HeaderComp,
      HeroBlock,
    FooterComp
  }
};
</script>

<style lang="scss">
@import "style.scss";
html{
  background-color: $light;
}

</style>
