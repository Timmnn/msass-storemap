<template>
    <HeroBlock/>
    <img class="demo-img" src="../assets/img.webp" alt="">
    <GettingStarted/>
</template>

<script>
import HeroBlock from "../components/HeroBlock.vue";
import VButton from "../components/VButton.vue";
import GettingStarted from "../components/GettingStarted.vue";

export default {
    name: "Home",
    components: {GettingStarted, VButton, HeroBlock}
}
</script>

<style scoped>
.demo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>