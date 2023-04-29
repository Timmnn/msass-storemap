<template>
    <div class="hero">
        <h1>My Hero Block</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <div>
            <v-button>Get started</v-button>
            <v-button id="hero-button-2" type="light">Live Demo</v-button>
        </div>
    </div>
</template>

<script>
import VButton from "./VButton.vue";

export default {
    name: "HeroBlock",
    components: {
        VButton
    }
}
</script>

<style lang="scss" scoped>
#hero-button-2 {
  margin-left: 1rem;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>