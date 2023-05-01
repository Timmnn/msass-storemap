<template>
    <div class="getting-started">
        <h2>
            Ready to ditch Google Analytics? <br>
            Start your free trial today.
        </h2>
        <div class="buttons">
            <VButton>Get started</VButton>
            <VButton href="/live-demo" type="light">Live demo</VButton>
        </div>
    </div>
</template>

<script>
import VButton from "./VButton.vue";

export default {
    name: "GettingStarted",
    components: {VButton}
}
</script>

<style scoped lang="scss">
.getting-started .v-button:last-child {
    margin-left: 1rem;
}

.getting-started {
    display: flex;
    justify-content: space-evenly;

    .buttons{
        display: flex;
    }
}

</style>